<template>
  <div v-if="Object.keys(errors).length" class="relative flex bg-white rounded overflow-hidden p-2 space-x-1">
    <div class="absolute inset-0 border-l-4 border-red-400"></div>
    <div class="flex items-baseline">
      <span class="bg-red-300 bg-opacity-50 rounded-full p-1 mr-3">
        <svg class="h-6 w-auto text-red-400" fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="currentColor">
              <rect x="0" y="7" width="16" height="2" rx="1"/>
              <rect opacity="0.3" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000) " x="0" y="7" width="16" height="2" rx="1"/>
            </g>
          </g>
        </svg>
      </span>
    </div>
    <div class="text-left">
      <p v-for="error in errors" :key="error" class="leading-tight text-xs md:text-sm">
        {{  error }}
      </p>
    </div>
  </div>
  <div v-if="success" class="relative flex bg-white rounded overflow-hidden p-2 space-x-1">
    <div class="absolute inset-0 border-l-4 border-green-400"></div>
    <div class="flex items-baseline">
      <span class="bg-green-300 bg-opacity-50 rounded-full p-1 mr-3">
        <svg fill="currentColor" class="h-6 w-auto text-green-400" width="24px" height="24px" viewBox="0 0 24 24">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <polygon points="0 0 24 0 24 24 0 24"/>
            <path d="M9.26193932,16.6476484 C8.90425297,17.0684559 8.27315905,17.1196257 7.85235158,16.7619393 C7.43154411,16.404253 7.38037434,15.773159 7.73806068,15.3523516 L16.2380607,5.35235158 C16.6013618,4.92493855 17.2451015,4.87991302 17.6643638,5.25259068 L22.1643638,9.25259068 C22.5771466,9.6195087 22.6143273,10.2515811 22.2474093,10.6643638 C21.8804913,11.0771466 21.2484189,11.1143273 20.8356362,10.7474093 L17.0997854,7.42665306 L9.26193932,16.6476484 Z" fill="currentColor" fill-rule="nonzero" opacity="0.3" transform="translate(14.999995, 11.000002) rotate(-180.000000) translate(-14.999995, -11.000002) "/>
            <path d="M4.26193932,17.6476484 C3.90425297,18.0684559 3.27315905,18.1196257 2.85235158,17.7619393 C2.43154411,17.404253 2.38037434,16.773159 2.73806068,16.3523516 L11.2380607,6.35235158 C11.6013618,5.92493855 12.2451015,5.87991302 12.6643638,6.25259068 L17.1643638,10.2525907 C17.5771466,10.6195087 17.6143273,11.2515811 17.2474093,11.6643638 C16.8804913,12.0771466 16.2484189,12.1143273 15.8356362,11.7474093 L12.0997854,8.42665306 L4.26193932,17.6476484 Z" fill="currentColor" fill-rule="nonzero" transform="translate(9.999995, 12.000002) rotate(-180.000000) translate(-9.999995, -12.000002) "/>
          </g>
        </svg>
      </span>
    </div>
    <div class="text-left">
      Der Post wurde erfolgreich erstellt!
    </div>
  </div>
  <div>
    <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <div class="text-base font-medium text-gray-900">
              Titel
            </div>
            <input type="text" name="title" v-model="post.title" autocomplete="given-name" class="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div class="col-span-6">
            <div class="text-base font-medium text-gray-900">
              Text
            </div>
            <div class="mt-1">
              <textarea id="about" name="description" v-model="post.description" rows="3" class="shadow-sm focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Dies ist der Anfang deiner Story..." />
            </div>
          </div>
          <div class="col-span-6">
            <fieldset>
              <div class="text-base font-medium text-gray-900">
                Veröffentlichung
              </div>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input id="push-everything" name="status" v-model="post.status" value="Draft" type="radio" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300" />
                  <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">
                    Entwurf
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="push-email" name="status" v-model="post.status" value="Published" type="radio" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300" />
                  <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">
                    Veröffentlicht
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 grid grid-cols-2">
        <button @click="savePost" class="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Speichern
        </button>
        <button @click="redirectPosts" class="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Abbrechen
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import PostDataService from "@/services/PostDataService";
import router from "@/router";

export default {
  name: "CreatePost",
  data() {
    return {
      post: {
        title: "",
        description: "",
        status: "Draft"
      },
      success: false,
      errors: {},
    };
  },
  methods: {
    redirectPosts(){
      router.push('/posts')
    },
    savePost() {
      this.errors = {};

      PostDataService.create(this.post)
          .then(() => {
            this.success = true;
          })
          .catch(e => {
            this.errors = e.response.data.messages;
          });
    },
  }
};

</script>

<style scoped>

</style>
