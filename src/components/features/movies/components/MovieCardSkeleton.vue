<template>
  <div class="flex flex-col items-start gap-200 animate-pulse">
    <!-- Skeleton image -->
    <div class="relative w-full aspect-[2/3] rounded-200 bg-skeleton h-[320px]">
      <!-- Overlay -->
      <div
        class="absolute inset-0 rounded-200 pointer-events-none"
        style="
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 36.54%,
            rgba(0, 0, 0, 0.45) 100%
          );
        "
      ></div>
      <!-- tag placeholder -->
      <div
        class="absolute top-0 left-0 rounded-tl-200 rounded-br-200 bg-skeleton-dark h-[26px] w-[96px]"
      ></div>

      <!-- Bottom content -->
      <div
        class="content absolute bottom-250 left-250 flex flex-col gap-[5px] w-3/4"
      >
        <div class="h-5 bg-skeleton rounded w-2/4"></div>
        <div class="flex items-center gap-200">
          <div class="h-4 bg-skeleton-light rounded w-[30px]"></div>
          <div class="h-4 bg-skeleton-light rounded w-[1px]"></div>
          <div class="h-4 bg-skeleton-light rounded w-[46px]"></div>
          <div class="h-4 bg-skeleton-light rounded w-[1px]"></div>
          <div class="h-4 bg-skeleton-light rounded w-[30px]"></div>
        </div>
      </div>
    </div>

    <!-- Info section -->
    <div class="px-200 space-y-250 w-full">
      <div class="flex items-center gap-[6px]">
        <div class="h-4 bg-skeleton rounded w-1/3"></div>
      </div>

      <div class="flex items-center space-x-200">
        <div class="h-[28px] w-[64px] rounded bg-skeleton"></div>
        <div class="h-[28px] w-[64px] rounded bg-skeleton-light"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-skeleton {
  @apply bg-neutral-200 dark:bg-neutral-400;
}
.bg-skeleton-light {
  @apply bg-neutral-200 dark:bg-neutral-400;
}
.bg-skeleton-dark {
  @apply bg-neutral-200 dark:bg-neutral-400;
}
</style>
