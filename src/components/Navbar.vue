<template  >
<i-navbar>
    <i-navbar-brand to="/" class='bg-halogosm  w-56 h-16 cover bg-no-repeat -rotate-6'>
    </i-navbar-brand>
    <i-navbar-collapsible class="_justify-content:flex-end">
        <i-nav>

            <i-dropdown>
                <i-nav-item stop-propagation>Chapters</i-nav-item>
                <template #body>
                    <i-dropdown-item>Action</i-dropdown-item>
                    <i-dropdown-item>Another action</i-dropdown-item>
                    <i-dropdown-item disabled>Disabled action</i-dropdown-item>
                    <i-dropdown-divider />
                    <i-dropdown-item>Separated item</i-dropdown-item>
                </template>
            </i-dropdown>
            <i-nav-item to="/">
                Resources
            </i-nav-item>
            <i-nav-item class="flex-none" >
                 <i-textarea v-model="value" size='sm' rows='1' clearable placeholder="Search Chapters" class="resize-none inline-block">
                 <template  #append>
                    <i-button>🔍</i-button>
                  </template>
                 </i-textarea>

            </i-nav-item>
        </i-nav>
    </i-navbar-collapsible>
</i-navbar>
</template>