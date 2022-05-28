<script>
import axios from "axios";

export default {
  name: "UserTable",
  data() {
    return {
      tableHeaders: ["ID", "Name", "Username", "Email", "Phone", "Website"],
      tableData: [],
      loading: true,
      error: false,
      search: "",
    };
  },
  computed: {
    filteredNames() {
      return this.tableData.filter((user) => {
        return user.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    async getAllUsers() {
      this.loading = true;
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.loading = false;
          this.tableData = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created: function () {
    this.getAllUsers();
  },

  props: {},
};
</script>

<template>
  <div>
    <t-tag tag-name="div" class="max-w-screen-lg m-auto">
      <t-tag tag-name="p" v-if="error" class="text-red-900">
        Error loading users
      </t-tag>
      <t-tag tag-name="div" v-else>
        <t-tag
          tag-name="h3"
          variant="h3"
          class="flex justify-center text-4xl text-blue-900"
        >
          Users table
        </t-tag>
        <t-tag tag-name="div" class="my-10 flex w-6/12 items-center items-end">
          <t-tag tag-name="span" class="mr-4">Search</t-tag>
          <t-input
            class="min-w-50 mr-8"
            name="search"
            placeholder="Search by city, dance form, studios or zip code..."
            v-model="search"
          ></t-input>
        </t-tag>
        <t-tag tag-name="p" v-if="loading" class="text-blue-900">
          Loading users...
        </t-tag>
        <t-tag tag-name="div" v-else>
          <t-tag tag-name="div" class="my-8">
            <t-table
              v-if="filteredNames.length"
              :headers="tableHeaders"
              :data="filteredNames"
            >
              <template slot="tbody" slot-scope="props">
                <tbody
                  :class="props.tbodyClass"
                  v-for="item in filteredNames"
                  :key="item.id"
                >
                  <tr :class="props.trClass">
                    <td :class="props.tdClass" colspan="1">
                      {{ item.id }}
                    </td>
                    <td :class="props.tdClass" colspan="1">
                      {{ item.name }}
                    </td>
                    <td :class="props.tdClass" colspan="1">
                      {{ item.username }}
                    </td>
                    <td :class="props.tdClass" colspan="1">
                      {{ item.email }}
                    </td>
                    <td :class="props.tdClass" colspan="1">
                      {{ item.phone }}
                    </td>
                    <td :class="props.tdClass" colspan="1">
                      {{ item.website }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </t-table>
            <t-tag v-else tag-name="h2" class="text-red-900 center">
              Nothing found</t-tag
            >
          </t-tag>
        </t-tag>
      </t-tag>
    </t-tag>
  </div>
</template>
