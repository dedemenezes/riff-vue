<script setup>
import { computed } from "vue";
import { IconPlus } from "@/components/ui/icons";
import QuickLinksSection from "@/components/layout/sections/QuickLinksSection.vue";
import HomeBanner from "@/components/ui/HomeBanner.vue";
import TwContainer from "@/components/layout/TwContainer.vue";
import { ButtonText } from "@/components/ui/buttons";
import ArticleCard from "@/components/ui/cards/ArticleCard.vue";
import ContextMenu from "../components/layout/navbar/ContextMenu.vue";
import { useI18n }  from "@/composables/useI18n";

const { t } = useI18n()

const quickLinks = [
  {
    id: 1,
    title: "PROGRAMAÇÃO",
    description:
      "Veja a programação completa ou filtre de acordo com o que deseja.",
    href: "/programacao",
  },
  {
    id: 2,
    title: "INGRESSOS",
    description: "Descubra como garantir sua entrada nos cinemas e eventos.",
    href: "/filmes",
  },
  {
    id: 3,
    title: "MUDANÇAS NA PROGRAMAÇÃO",
    description: "Planeje-se verificando as mudanças na programação.",
    href: "/mudancas",
  },
];

// After (optimized with translation keys)
const quickLinksConfig = [
  {
    id: 1,
    titleKey: "quickLinks.programming.title",
    descriptionKey: "quickLinks.programming.description",
    href: "/programacao",
  },
  {
    id: 2,
    titleKey: "quickLinks.tickets.title",
    descriptionKey: "quickLinks.tickets.description",
    href: "/filmes",
  },
  {
    id: 3,
    titleKey: "quickLinks.schedule.title",
    descriptionKey: "quickLinks.schedule.description",
    href: "/mudancas",
  },
];

const translatedLinks = computed(() =>
  quickLinksConfig.map(link => ({
    ...link,
    title: t(link.titleKey),
    description: t(link.descriptionKey)
  }))
);
console.log(translatedLinks.value);

</script>

<template>
  <ContextMenu />
  <HomeBanner
    imagePath="/src/assets/images/mobile-banner.png"
    alt="Banner promocional"
  >
    <h1 class="text-header-base text-2xl lg:text-3xl mb-200 text-primary">
      {{ $t("home.banner_title") }}
    </h1>
    <p class="text-subheading text-primary">
      {{ $t("home.banner_subtitle") }}
    </p>
  </HomeBanner>

  <QuickLinksSection v-bind:links="translatedLinks" />

  <TwContainer>
    <div class="py-1200">
      <div class="flex flex-col gap-y-800">
        <h2 class="text-header-base text-3xl text-primary">Últimas notícias</h2>

        <div
          class="flex flex-col gap-y-800 lg:grid lg:gap-x-800 lg:grid-cols-[2fr_1fr]"
        >
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
        <div
          class="flex flex-col gap-y-800 lg:grid lg:gap-x-800 lg:grid-cols-4"
        >
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

        <ButtonText
          tag="a"
          text="Ver mais"
          variant="dark"
          size="md"
          class="self-center hover:text-neutrals-700"
        >
          <template v-slot:icon>
            <IconPlus class="me-100" />
          </template>
        </ButtonText>
      </div>
    </div>
  </TwContainer>
</template>

<style scoped></style>
