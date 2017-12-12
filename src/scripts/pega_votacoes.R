#!/usr/bin/env Rscript
library(tidyverse)
library(jsonlite)
library(rcongresso)

source("constroi_dataframe.R")

na_to_y <- function(x, y) {
  x[is.na(x)] <- y
  x
}

enumera <- function(votos) {
  votos %>%
    replace(. == "não", -1) %>%
    replace(. == "sim", 1) %>%
    replace(. == "abstenção", 0) %>% # Para efeitos de comparação neste momento não faz diferença
    na_to_y(., 0)
}

ordena <- function(dataframe, parametro_ord) {
  dataframe[order(parametro_ord),]
}

# args = commandArgs(trailingOnly = TRUE)
# if (length(args) != 2) {
#   stop(
#     "Uso: pega_votacoes.R <arquivo_de_proposicoes> <arquivo_de_votacoes>"
#     )
# }

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

tryCatch({
  props <- props %>%
    pmap(fetch_id_proposicao) %>%
    map_df(fetch_proposicao)
}, error=function(e){
  print("Alguma proposição não foi encontrada.")
  stop()
})

tryCatch({
  votacoes_relevantes <- fetch_votacao(ids_votacoes)
}, error=function(e){
  print("Alguma votação não foi encontrada.")
  stop()
})

# Eu quero que todos os deputados tenham todas as votações
votos_deputados <- constroi_dataframe(props, votacoes_relevantes) %>%
  left_join(votacoes, by="id_votacao") %>%
  select(nome = parlamentar.nome, id_deputado = parlamentar.id, uf = parlamentar.siglaUf,
         value_name = voto, tema = nome_votacao, id_votacao
         ) %>%
  #bind_rows(votacoes_impeachment()) %>% # Adiciona votações externas do impeachment e da denúncia do Temer
  #bind_rows(votacoes_denuncia_temer()) %>%
  complete(id_votacao, nesting(id_deputado, nome, uf)) %>%
  mutate(value_name = tolower(value_name),
         value = as.integer(enumera(value_name)),
         value_name = na_to_y(value_name, "não votou")
         ) %>%
  ordena(.$tema) %>%
  group_by(id_deputado, nome, uf) %>%
  nest() %>%
  rename(votacoes = data)

ids_deputados <- votos_deputados$id_deputado %>%
  unique()

partidos_atuais <- fetch_ultimo_status_deputado(ids_deputados) %>%
  select(id, partido = siglaPartido, foto = urlFoto)

votos_deputados %>%
  left_join(partidos_atuais, by = c("id_deputado" = "id")) %>%
  toJSON() %>%
  writeLines(stdout())
