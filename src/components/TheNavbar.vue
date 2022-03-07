<template>
  <div>
    <v-list>
      <v-list-item class="px-2" link href="https://github.com/Augustotwz">
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

      <v-list-item link to="/about">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ABOUT</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>
