<script setup lang="ts">
import { components } from "~/slices";
</script>

<template>
	<SliceSimulator #default="{ slices }" background="#030712">
		<SliceZone :slices="slices" :components="components" />
	</SliceSimulator>
</template>