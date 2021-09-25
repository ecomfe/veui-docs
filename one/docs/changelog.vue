<template>
<article
  class="content post"
  :class="{ 'filter-version': compareValid }"
>
  <h1 data-markdown>
    变更日志
  </h1>
  <veui-form
    style="--dls-field-label-width: 4em"
    ui="s"
    class="form"
  >
    <veui-field
      ui="s"
      label="变更类型"
    >
      <veui-checkbox-group
        v-model="types"
        class="types"
        :items="allTypes"
      >
        <template #item="{ label, emoji }">
          <span class="emoji">{{ emoji }}</span> {{ label }}
        </template>
      </veui-checkbox-group>
    </veui-field>
    <veui-field
      ui="s"
      label="功能筛选"
    >
      <veui-select
        v-model="tag"
        searchable
        clearable
        :options="allTags"
        placeholder="根据组件/指令/插件/模块等进行过滤……"
      />
    </veui-field>
    <veui-fieldset
      ui="s"
      label="版本对比"
    >
      <veui-field>
        <veui-checkbox
          v-model="compare"
          class="compare-toggle"
        >
          开启
        </veui-checkbox>
      </veui-field>
      <template v-if="compare">
        <veui-field>
          <veui-select
            v-model="from"
            class="version"
            :options="allVersions"
            searchable
            clearable
            placeholder="选择起始版本……"
          />
        </veui-field>
        →
        <veui-field>
          <veui-select
            v-model="to"
            class="version"
            :options="allVersions"
            searchable
            clearable
            placeholder="选择目标版本……"
          />
        </veui-field>
      </template>
    </veui-fieldset>
  </veui-form>
  <section
    v-for="{ version, codeName, changeset } of filteredChangelog"
    :key="version"
    data-markdown
  >
    <h2
      :class="{
        major: isMajor(version),
        minor: isMinor(version),
      }"
    >
      {{ version }} <small>{{ codeName }}</small>
    </h2>
    <ul>
      <li
        v-for="({ type, tags, content }, index) of changeset"
        :key="index"
        v-html="content"
      />
    </ul>
  </section>
</article>
</template>

<script>
import { cloneDeep } from 'lodash'
import { Form, Field, Fieldset, CheckboxGroup, Select, Checkbox } from 'veui'
import changelog from '../assets/data/changelog.json'

const allTypes = [
  { label: '非兼容性变更', value: 'breaking', emoji: '⚠️' },
  { label: '主要变更', value: ' feature', emoji: '💡' },
  { label: '问题修复', value: 'bugfix', emoji: '🐞' },
  { label: '实验性功能', value: 'experimental', emoji: '🧪' }
]

const allVersions = changelog.map(({ version }) => ({ label: version, value: version }))
const allTags = [
  ...new Set(changelog.map(({ changeset }) => changeset.map(({ tags }) => tags).flat()).flat())
]
  .sort()
  .map(tag => ({ label: tag, value: tag }))

function isMajor (version) {
  return /^\d+\.0.0$/.test(version)
}

function isMinor (version) {
  return /^\d+\.(?:[1-9]|\d{2,}).0$/.test(version)
}

export default {
  name: 'one-changelog',
  layout: 'default',
  components: {
    'veui-form': Form,
    'veui-field': Field,
    'veui-fieldset': Fieldset,
    'veui-checkbox-group': CheckboxGroup,
    'veui-select': Select,
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      changelog,
      allTypes,
      types: allTypes.map(({ value }) => value),
      allVersions,
      allTags,
      compare: false,
      tag: null,
      from: null,
      to: allVersions[0].value
    }
  },
  computed: {
    compareValid () {
      return this.from && this.to
    },
    filteredChangelog () {
      const { changelog, tag, from, to } = this

      let result = cloneDeep(changelog)

      if (from && to) {
        const fromIndex = result.findIndex(({ version }) => version === from)
        const toIndex = result.findIndex(({ version }) => version === to)
        result = result.slice(toIndex, fromIndex)
      }

      result.forEach((versionLog) => {
        const { changeset } = versionLog
        versionLog.changeset = changeset
          .filter(({ type, tags }) => this.types.includes(type) && (!tag || tags.includes(tag)))
      })

      return result.filter(({ changeset }) => changeset.length !== 0)
    }
  },
  watch: {
    compare (val) {
      if (!val) {
        this.from = this.to = null
      }
    }
  },
  methods: {
    isMajor,
    isMinor
  }
}
</script>

<style lang="stylus" scoped>
.emoji
  font-family "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Android Emoji", EmojiSymbols

.compare-toggle
  margin-right 8px

.version
  width 160px
  margin 0 8px

.veui-field
  --dls-field-label-width inherit

.form
  & >>> .veui-field
    margin-bottom 12px

  & >>> .veui-field .veui-field-no-label
    margin-bottom 0

h2
  font-size 20px
  margin 1.2em 0 0.6em

  &.minor
    font-size 24px

  &.major
    font-size 28px

  &.minor
  &.major
    &::before
      content "§"

  small
    font-size 18px
</style>
