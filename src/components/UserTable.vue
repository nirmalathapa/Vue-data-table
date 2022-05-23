<script>
import axios from "axios";

export default {
  name: "UserTable",
  data() {
    return {
      tableHeaders: ["ID", "Name", "Username", "Email", "Phone", "Website"],
      tableData: [],
    };
  },
  created: function () {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      return (this.tableData = response.data);
    });
  },
  props: {},
};
</script>

<template>
  <div>
    <t-tag tag-name="div" class="max-w-screen-lg m-auto">
      <t-tag
        tag-name="h3"
        variant="h3"
        class="flex justify-center text-4xl text-blue-900"
      >
        Users table
      </t-tag>

      <t-tag tag-name="div" class="my-8">
        <t-table :headers="tableHeaders" :data="tableData">
          <template slot="tbody" slot-scope="props">
            <tbody
              :class="props.tbodyClass"
              v-for="item in tableData"
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
      </t-tag>
    </t-tag>
  </div>
</template>
