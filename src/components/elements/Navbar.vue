<template>
<i-navbar>
    <i-navbar-brand to="/" class='bg-halogosm w-56 h-16 cover bg-opacity-30 bg-no-repeat'>
    </i-navbar-brand>
    <i-navbar-collapsible class="_justify-content:flex-end">
        <i-nav>
            <router-link to="chapters">
                <i-nav-item>
                    Chapters
                </i-nav-item>
            </router-link>
            <!-- kept this template below for dropdown function. remove if not needed -->
            <!-- <i-dropdown class="z-10">
                <i-nav-item stop-propagation>Chapters</i-nav-item>
                <template #body>
                    <i-dropdown-item>    <router-link to="/404">Action</router-link></i-dropdown-item>
                    <i-dropdown-item>Another action</i-dropdown-item>
                    <i-dropdown-item disabled>Disabled action</i-dropdown-item>
                    <i-dropdown-divider />
                    <i-dropdown-item>Separated item</i-dropdown-item>
                </template>
            </i-dropdown> -->
            <router-link to="resources">
                <i-nav-item>
                    Resources
                </i-nav-item>
            </router-link>
            <i-nav-item class="flex-end" >
                <i-textarea size='sm' rows='1' clearable placeholder="Search Chapters" class="resize-none inline-block">
                <template  #append>
                <i-button><i-icon name="ink-search" /></i-button>
                </template>
                </i-textarea>
            </i-nav-item>
        </i-nav>
    </i-navbar-collapsible>
</i-navbar>
</template>