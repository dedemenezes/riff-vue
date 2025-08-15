<script setup>
import SponsorHeader from "./components/layout/headers/SponsorHeader.vue";
import NavbarMain from "./components/layout/navbar/NavbarMain.vue";
import NavbarSecundary from "./components/layout/navbar/NavbarSecundary.vue";
import { IconCheck } from "@/components/ui/icons";
import { IconSearch } from "@/components/ui/icons";
import { IconDash } from "@/components/ui/icons";
import { IconCarretUp } from "@/components/ui/icons";
import { IconInfo } from "@/components/ui/icons";
import { IconPin } from "@/components/ui/icons";
import { IconChange } from "@/components/ui/icons";
import { IconNewUser } from "@/components/ui/icons";
import { IconClose } from "@/components/ui/icons";
import { IconClock } from "@/components/ui/icons";
import { IconChevronLeft } from "@/components/ui/icons";
import { IconChevronRight } from "@/components/ui/icons";
import { IconLink } from "@/components/ui/icons";
import { IconFilter } from "@/components/ui/icons";
import { IconPlus } from "@/components/ui/icons";
import { IconProgram } from "@/components/ui/icons";
import { IconMenu } from "@/components/ui/icons";
import TextInput from "./components/inputs/TextInput.vue";
import TagMostra from "@/components/ui/tags/TagMostra.vue";
import TagScreening from "@/components/ui/tags/TagScreening.vue";
import TagFilter from "./components/ui/tags/TagFilter.vue";
import QuickLinksSection from "./components/layout/sections/QuickLinksSection.vue";
import HomeBanner from "@/components/ui/HomeBanner.vue";
import SubHeading from "@/components/ui/typography/SubHeading.vue";
import BaseHeader from "@/components/ui/typography/BaseHeader.vue";
import TwContainer from "@/components/layout/TwContainer.vue";
import ButtonText from "@/components/ui/buttons/ButtonText.vue";
import ArticleCard from "./components/ui/cards/ArticleCard.vue";
const quickLinks = [
  {
    id: 1,
    title: 'PROGRAMAÇÃO',
    description: 'Veja a programação completa ou filtre de acordo com o que deseja.',
    href: '/programacao'
  },
  {
    id: 2,
    title: 'INGRESSOS',
    description: 'Descubra como garantir sua entrada nos cinemas e eventos.',
    href: '/filmes'
  },
  {
    id: 3,
    title: 'MUDANÇAS NA PROGRAMAÇÃO',
    description: 'Planeje-se verificando as mudanças na programação.',
    href: '/mudancas'
  }
]

</script>

<template>
  <SponsorHeader class="bg-azul-400" />
  <NavbarMain />
  <NavbarSecundary />
  <HomeBanner
  imagePath="/src/assets/images/mobile-banner.png"
  alt="Banner promocional"
  >
    <BaseHeader
      font-size="text-2xl lg:text-3xl"
      class="mb-200"
    >
      A 26ª edição do Festival do Rio vem aí!
    </BaseHeader>
    <SubHeading>
      De 2 a 12 de outubro o cinema estará sob a luz do Rio
    </SubHeading>
  </HomeBanner>

  <QuickLinksSection v-bind:links="quickLinks" />

  <TwContainer>
    <div class="py-1200">
      <div class="flex flex-col gap-y-800">
        <BaseHeader font-size="text-3xl">Últimas notícias</BaseHeader>

        <div class="flex flex-col gap-y-800 lg:grid lg:gap-x-800 lg:grid-cols-[2fr_1fr]">
          <ArticleCard
            variant="primary"
            background-image="../src/assets/images/noticia-one.png"
            heightClass="h-[589px]"
            title="Pedaço de Mim, de Anne-Sophie Bailly, e Apocalipse nos Trópicos, de Petra Costa, estão entre as principais estreias da semana"
            content="Os longas-metragens têm em comum a direção de cineastas mulheres e a presença destacada na programação do 26º Festival do Rio (2024)."
            date="22.07.2025"
            category="estreias da semana"
            />
          <ArticleCard
            variant="primary"
            background-image="https://s3.amazonaws.com/festivaldorio/files/imagens/507dcb8456c3c6939126d891a11725d5.jpeg"
            heightClass="h-[472px]"
            title="Festival do Rio na Bienal do Livro: O Auto da Compadecida será exibido na feira literária carioca"
            content="Longa que adaptada célebre obra do escritor Ariano Suassuna terá uma projeção especial na Praça Além da Página Shell, nesta segunda-feira (16). A sessão é promovida pelo Festival do Rio em parceria com a Bienal do Livro, com apoio da Globo Filmes"
            date="22.07.2025"
            category="festival do rio"
            />
        </div>

        <!-- secundaria -->
        <div class="flex flex-col gap-y-800 lg:grid lg:gap-x-800 lg:grid-cols-4 ">
          <ArticleCard
          variant="secondary"
          background-image="../src/assets/images/noticia-two.png"
          title="Talents Rio 2025: Projeto Paradiso renova apoio ao programa de formação de profissionais do audiovisual"
          date="22.07.2025"
          category="talents rio"
          />
          <ArticleCard
          variant="secondary"
          background-image="https://s3.amazonaws.com/festivaldorio/files/imagens/77ebda55831201b57c8b342db86e65a6.jpeg"
          title="Dia Nacional do Documentário Brasileiro: conheça todos os vencedores do Troféu Redentor de melhor documentário no Festival do Rio"
          date="22.05.2025"
          category="premiere brasil"
          />
          <ArticleCard
          variant="secondary"
          background-image="https://s3.amazonaws.com/festivaldorio/files/imagens/c15a563d6d839971cc16c34aef3cf32e.jpg"
          title="Festival do Rio celebra os vencedores do Prêmio Grande Otelo 2025"
          date="12.04.2025"
          category="festival do rio"
          />
          <ArticleCard
          variant="secondary"
          background-image="https://s3.amazonaws.com/festivaldorio/files/imagens/21dc8f4c81fbb402b1725cb997d3a1ea.jpg"
          title="Festival do Rio indica: 15 filmes românticos disponíveis no streaming para assistir no Dia dos Namorados"
          date="22.03.2025"
          category="festival do rio"
          />
        </div>

        <ButtonText tag="a" text="Ver mais" variant="dark" size="md" class="self-center hover:text-neutrals-700">
          <template v-slot:icon>
            <IconPlus class="me-100" />
          </template>
        </ButtonText>

      </div>

    </div>

  </TwContainer>

  <TextInput id="flamengo"/>
  <TwContainer>
    <div class="flex justify-center space-x-200 mb-600">
      <IconClock />
      <IconProgram />
      <IconNewUser />
      <IconChange />
      <IconLink />
      <IconChevronRight />
      <IconChevronLeft />
      <IconMenu />
      <IconClose />
      <IconPin />
      <IconSearch />
      <IconPlus />
      <IconFilter />
      <IconInfo />
      <IconCheck />
      <IconDash />
      <IconCarretUp />
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
      <TagMostra mode="filled" variant="gala-abertura" text="Gala de Abertura" />
      <TagMostra mode="outline" variant="gala-abertura" text="Gala de Abertura" />
      <TagMostra mode="filled" variant="gala-encerramento" text="Gala de Encerramento" />
      <TagMostra mode="outline" variant="gala-encerramento" text="Gala de Encerramento" />
      <TagMostra mode="filled" variant="cine-memoria" text="CinE MemóRIA" />
      <TagMostra mode="outline" variant="cine-memoria" text="CinE MemóRIA" />
      <TagMostra mode="filled" variant="midnight-movies" text="Midnight movies" />
      <TagMostra mode="outline" variant="midnight-movies" text="Midnight movies" />
      <TagMostra mode="filled" variant="expectativa" text="Expectativa" />
      <TagMostra mode="outline" variant="expectativa" text="Expectativa" />
      <TagMostra mode="filled" variant="premiere-brasil" text="Premiere-brasil" />
      <TagMostra mode="outline" variant="premiere-brasil" text="Premiere-brasil" />
      <TagMostra mode="filled" variant="premiere-latina" text="Premiere-latina" />
      <TagMostra mode="outline" variant="premiere-latina" text="Premiere-latina" />
      <TagMostra mode="filled" variant="resistencias" text="Resistencias" />
      <TagMostra mode="outline" variant="resistencias" text="Resistencias" />
      <TagMostra mode="filled" variant="itinerarios" text="Itinerarios" />
      <TagMostra mode="outline" variant="itinerarios" text="Itinerarios" />
      <TagMostra mode="filled" variant="classicos-cults" text="Classicos-cults" />
      <TagMostra mode="outline" variant="classicos-cults" text="Classicos-cults" />
      <TagMostra mode="filled" variant="panorama" text="Panorama" />
      <TagMostra mode="outline" variant="panorama" text="Panorama" />
      <TagMostra mode="filled" variant="cinema-capacete" text="Cinema-capacete" />
      <TagMostra mode="outline" variant="cinema-capacete" text="Cinema-capacete" />
      <TagScreening time="19h30" state="default"/>
      <TagScreening time="19h30" state="active"/>
      <TagScreening time="19h30" state="disabled"/>
      <TagFilter text="Legenda" />
    </div>
  </TWContainer>


  <div class="grid grid-cols-3 gap-300">
    <!-- <ListCard v-for="movie in movies" :key="movie.id"  :movie /> -->
  </div>

</template>

<style scoped></style>
