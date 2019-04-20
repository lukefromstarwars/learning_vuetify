<template>
  <p>{{ $t("hello") }}</p>
</template>

<script>
export default {
  name: "HelloI18n"
};
</script>

<i18n>
{
  "fr": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
