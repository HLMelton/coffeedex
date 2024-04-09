<script setup lang="ts">
import { ref } from 'vue';

const platform =ref('web')

</script>

<template>
<div class="overflow-x-auto">
  <table class="table-md">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Roaster</th>
        <th>Name</th>
        <th v-if="platform != 'mobile'" >Region/Blend</th>
        <th>Process</th>
        <th>Score</th>
        <th>Upvote</th>
        <th>Downvote</th>
      </tr>
    </thead>
    <tbody>
    <!-- Example Boilerplate Below -->
      <!-- row 1 -->
      <tr>
        <td>1</td>
        <td>Onyx</td>
        <th>Southern Weather</th>
        <td v-if="platform != 'mobile'">Blend</td>
        <td>Washed</td>
        <td>---</td>
        <th>
          <label>
            <button class="btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </label>
        </th>
        <th>
          <label>
            <button class="btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </label>
        </th>
      </tr>

      <!-- row 2 -->
      <tr>
        <td>2</td>
        <td>Brandywine Coffee Roasters</td>
        <th>Ethiopia Worka</th>
        <td v-if="platform != 'mobile'" >Ethiopia</td>
        <td>Anerobic Natural</td>
        <td>---</td>
        <th>
        <label>
          <button class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </label>
      </th>
      <th>
        <label>
          <button class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </label>
        </th>
      </tr>

    </tbody>
  </table>
</div>
</template>
