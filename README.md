# README
*Proposta arquitetural para sistemas Web*

[![Build Status](https://travis-ci.org/insidemybrain/react-clean-arch-mvp.svg?branch=master)](https://travis-ci.org/insidemybrain/react-clean-arch-mvp)
[![Coverage Status](https://coveralls.io/repos/github/insidemybrain/react-clean-arch-mvp/badge.svg?branch=master)](https://coveralls.io/github/insidemybrain/react-clean-arch-mvp?branch=master)
[![codecov](https://codecov.io/gh/insidemybrain/react-clean-arch-mvp/branch/master/graph/badge.svg)](https://codecov.io/gh/insidemybrain/react-clean-arch-mvp)

[![codebeat badge](https://codebeat.co/badges/52550cbd-90f1-49c7-943e-04008e1b8734)](https://codebeat.co/projects/github-com-insidemybrain-react-clean-arch-mvp-master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/92f102e86ac74efdb09653a9ddcb9dd1)](https://www.codacy.com/app/insidemybrain/react-clean-arch-mvp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=insidemybrain/react-clean-arch-mvp&amp;utm_campaign=Badge_Grade)
[![CodeFactor](https://www.codefactor.io/repository/github/insidemybrain/react-clean-arch-mvp/badge)](https://www.codefactor.io/repository/github/insidemybrain/react-clean-arch-mvp)

[![Typescript](https://img.shields.io/badge/Typescript-3.4.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-16.8.12-9cf.svg?style=flat)](https://pt-br.reactjs.org/)
[![Sass](https://img.shields.io/badge/Sass-4.11.0-blueviolet.svg?style=flat)](https://sass-lang.com/)

---

## Sobre o projeto
Esse é o projeto *React* de um aplicativo com a estrutura(...)

Abaixo estão listadas algumas das principais bibliotecas utilizadas no projeto:
  - *NodeJS*
  - *Typescript*
  - *React*
  - *Sass*

---

## Clean Architecture
Com o crescimento de projetos foram identificadas diversas necessidades e, consequentemente, uma melhora na estrutura organizacional para evitar retrabalhos, modularizar ao máximo componentes e facilitar testes unitários.

Em muitos casos, um mesmo aplicativo se comunica com diferentes produtos, onde diversos desenvolvedores podem trabalhar.
Cada produto possui regras de negócio específicas, implementações diferenciadas e acesso à APIs específicas.

Mas como controlar tudo isso sem que ocorra uma dependência entre os módulos?

Como dividir melhor as tarefas entre os desenvolvedores e otimizar ao máximo seu tempo a fim de evitar o *overhead*?

O trabalho em camadas facilita a integração de diversos produtos a um projeto independente do tamanho da equipe.

E nesse momento entra a Arquitetura Limpa, do inglês *Clean Architecture*.

A *Clean Architecture* foi criada por *Robert C. Martin ("Uncle" Bob)* e é uma arquitetura de software amplamente divulgada pela sua fácil implementação e poder de criação de um único projeto com o máximo de módulos independentes, ou com o menor acoplamento possível, facilitando assim a manutenção e testes.

Maiores informações sobre a *Clean Architecture* podem ser encontradas em:
  - [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html);
  - [An Introduction to Clean Architecture](https://blog.ndepend.com/introduction-clean-architecture/);

---

### Adaptação da Clean Architecture
Em algumas implementações a arquitetura é implementada para cada *feature*, ou seja, cada feature são criadas as 3 camadas: **Presentation**, **Domain** e **Data**;

Porém, para a nossa estrutura atual utilizamos a *Clean Architecture* englobando cada um de nossos componentes.

Em nossa implementação, temos **3 módulos** que são:
  - **Presentation**: Camada de apresentação, responsável pela integração com o React, *Módulo React* subdividido em **3 pacotes**:
    - **core**: Pacote que contém utilitários;
    - **model**: Pacote que contém modelos da camada de apresentação;
    - **visual**: Pacote que contém todos os componentes visuais, utilizando o **MVP**;
  - **Domain**: Camada de domínio, onde são declaradas as regras de negócio do projeto, *Módulo Typescript puro* subdividido em **3 pacotes**:
    - **core**: Pacote que contém utilitários;
    - **interactor**: Pacote que contém os *casos de usos* da aplicação;
    - **model**: Pacote que contém modelos da camada de domínio;
  - **Data**: Camada de dados, responsável pela integração com APIs e cache, *Módulo Node* subdividido em **3 pacotes**: 
    - **core**: Pacote que contém utilitários;
    - **entity**: Pacote que contém as entidades da camada de dados;
    - **remote**: Pacote que contém classes responsáveis pela comunicação com APIs;

---

## MVP Pattern (Model-View-Presenter)
// TODO: Escrever sobre o MVP

---

### Utilização do MVP na camada de Apresentação
// TODO: Escrever sobre a adaptação do MVP p/ componentes React

---

## Testes
// TODO: Escrever sobre os testes

---
*Universidade Federal Rural do Rio de Janeiro 2019*
Orientador: Filipe Braida
Responsáveis:
*Fellipe Bravo*
*Gabriel Segobia*