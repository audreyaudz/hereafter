

<script>
export default {
    data() {
        return {
            modal_visible: false,
            active_tab: 'tab-1',
        };
    }
};
</script>

<template>
    <div class="centerdiv h-full"> <!-- this centers the content in the middle of the page (see style.css)-->
        <i-layout class="h-full" >
            <i-layout-content>
                <i-header
                    color="primary"
                    cover
                    class="_text-align:right bg-singapore-hero -fluid text bg-pos-center max-h-full"
                >
                    <h1>Welcome to Singapore</h1>
                    <p>This is a header paragraph lorem ipsum dolor sit amet.</p>
                    <i-button color="dark" class="my-5">Button</i-button>
                </i-header>
            </i-layout-content>

            <i-tabs v-model="active_tab" class="h-full">
                <template #header>
                    <i-tab-title for="tab-1">
                        Card&nbsp;
                        <i-badge class="bg-red-500">1</i-badge>
                    </i-tab-title>
                    <i-tab-title for="tab-2">Video</i-tab-title>
                    <i-tab-title for="tab-3">buttons</i-tab-title>
                </template>

                <i-tab name="tab-1">
                    <div class="_display:flex _flex-direction:row">
                        <i-card class="w-64 mx-3" color="light">
                            <template #image>
                                <img
                                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Card Image"
                                />
                            </template>
                            <h4 class="card-title">Card Title</h4>
                            <p class="card-subtitle">Card Subtitle</p>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="card-link" href="https://inkline.io">Example Link</a>
                        </i-card>
                        <i-card class="w-64 mx-3" color="dark">
                            <template #image>
                                <img
                                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Card Image"
                                />
                            </template>
                            <h4 class="card-title">Card Title</h4>
                            <p class="card-subtitle">Card Subtitle</p>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="card-link" href="https://inkline.io">Example Link</a>
                        </i-card>
                        <i-card class="w-64 mx-3" color="primary">
                            <template #image>
                                <img
                                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Card Image"
                                />
                            </template>
                            <h4 class="card-title">Card Title</h4>
                            <p class="card-subtitle">Card Subtitle</p>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="card-link" href="https://inkline.io">Example Link</a>
                        </i-card>
                        <i-card class="w-64 mx-3" color="secondary">
                            <template #image>
                                <img
                                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Card Image"
                                />
                            </template>
                            <h4 class="card-title">Card Title</h4>
                            <p class="card-subtitle">Card Subtitle</p>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="card-link" href="https://inkline.io">Example Link</a>
                        </i-card>
                    </div>
                </i-tab>
                <i-tab name="tab-2">
                    <div class="_embed:16:9">
                        <iframe src="https://www.youtube.com/embed/_oIDt3dRgro" allowfullscreen />
                    </div>
                </i-tab>
                <i-tab name="tab-3">
                    <i-button color="primary">Primary</i-button>

                    <i-button color="secondary">Secondary</i-button>

                    <i-button color="success">Success</i-button>

                    <i-button color="danger">Danger</i-button>

                    <i-button color="warning">Warning</i-button>

                    <i-button color="info">Info</i-button>

                    <i-button color="light">Light</i-button>

                    <i-button color="dark">Dark</i-button>

                    <i-button @click="modal_visible = true">Show Modal</i-button>

                    <i-modal v-model="modal_visible">
                        <template #header>Hello there</template>
                        This is the modal body. Useful information goes here.
                        <template
                            #footer
                        >Modal Footer</template>
                    </i-modal>
                </i-tab>
            </i-tabs>
        </i-layout>
    </div>
</template>

<style scoped>
</style>
