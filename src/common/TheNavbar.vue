<template>
  <div>
    <v-list>
      <v-list-item class="px-2" link href="https://github.com/Augustotwz" target="_blank">
        <v-list-item-avatar>
          <v-icon>mdi-github</v-icon>
        </v-list-item-avatar>
        <v-list-item-title>GITHUB</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>HOME</v-list-item-title>
      </v-list-item>

      <v-list-item link to="/todoList">
        <v-list-item-icon>
          <v-icon>mdi-clipboard-text</v-icon>
        </v-list-item-icon>
        <v-list-item-title>TODO LIST</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>
