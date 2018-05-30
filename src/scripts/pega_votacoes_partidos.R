#!/usr/bin/env Rscript
library(tidyverse)
library(jsonlite)
library(rcongresso)

id_partido_from_bancada <- function(bancada){
  bancadas %>%
    filter(sigla==toupper(bancada)) %>%
    select(id) %>%
    as.integer() %>%
    ifelse(is.na(.), NA, .)
}

nome_partido_from_bancada <- function(bancada){
  bancadas %>%
    filter(sigla==toupper(bancada)) %>%
    select(nome) %>%
    as.character() %>%
    ifelse(is.na(.), NA, .)
}

na_to_y <- function(x, y) {
  x[is.na(x)] <- y
  x
}

enumera <- function(votos) {
  votos %>%
    replace(. == "não", -1) %>%
    replace(. == "sim", 1) %>%
    replace(. == "abstenção", 0) %>%
    replace(. == "obstrução", 0) %>%
    replace(. == "null", 0) %>%
    replace(. == "liberado", 0) %>%
    replace(is.null(.), 0) %>% # Para efeitos de comparação neste momento não faz diferença
    na_to_y(., 0)
}

ordena <- function(dataframe, parametro_ord) {
  dataframe[order(parametro_ord),]
}

arquivo_proposicoes <- "../input/proposicoes_qmr.csv"
arquivo_votacoes <- "../input/ids_votacoes.csv"

props <- arquivo_proposicoes %>%
  read_csv(col_types = cols(
    tipo = col_character(),
    numero = col_integer(),
    ano = col_integer()
  ))

votacoes <- read_csv(arquivo_votacoes)
ids_votacoes <- votacoes$id_votacao

votos_partidos <- get_votos_partidos(ids_votacoes)

ids_partidos <- fetch_id_partido(unique(votos_partidos$partido))

ids_bancadas <- fetch_id_partido(unique(votos_partidos$bancada_associada))

partidos <<- fetch_partido(ids_partidos) %>%
  select(id, nome, sigla) %>%
  mutate(sigla = toupper(sigla))

bancadas <<- fetch_partido(ids_bancadas) %>%
  select(id, nome, sigla) %>%
  mutate(sigla = toupper(sigla))

# Solidariedade não está aqui porque ele aparece na bancada como solidariedad e não dá match com o partido...
# Pensar numa forma de incluí-lo aqui.
df_final <- left_join(votos_partidos, partidos, by=c("partido"="sigla")) %>%
  left_join(votacoes, by="id_votacao") %>%
  rename(tema = nome_votacao) %>%
  filter(partido != "") %>%
  rowwise() %>%
  mutate(
    id = ifelse(is.na(id),id_partido_from_bancada(bancada_associada),id),
    nome = ifelse(is.na(nome),nome_partido_from_bancada(bancada_associada),nome)
        ) %>%
  filter(!is.na(id) && partido != "P") %>%
  rowwise() %>%
  mutate(partido = ifelse(partido=="CDOB","PCDOB",partido)) %>%
  complete(id_votacao, nesting(id, nome, partido)) %>%
  mutate(value_name = tolower(orientacao_partido),
         value = as.integer(enumera(tolower(orientacao_partido)))
         #value_name = na_to_y(orientacao_partido, "não votou")
  ) %>%
  unique() %>%
  ordena(.$tema) %>%
  select(-bancada_associada) %>%
  group_by(id, nome, partido) %>%
  nest() %>%
  rename(votacoes = data, id_partido = id)

df_final %>%
  toJSON() %>%
  writeLines(stdout())
