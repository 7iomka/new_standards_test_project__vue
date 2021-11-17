<template>
<v-app>
    <v-container>
        <v-row justify="center">
            <v-col
                cols="6"
                class="py-12"
            >
                <div class="links mb-4">
                    ADD LINKS TO THE PAGES HERE
                </div>
                <div class="views">
                    <router-view/>
                </div>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>
