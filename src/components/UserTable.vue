<script>
export default {
  name: "UserTable",
  data() {
    return {
      tableHeaders: ["User Number", "User Name", "City", "Zip Code", "Address"],
      tableData: [
        {
          id: 1,
          name: "Leanne Graham",
          city: "California",
        },
        {
          id: 2,
          name: "Sunny Sunshine",
          city: "Copenhagen",
        },
      ],
    };
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
        <t-table :headers="tableHeaders" :data="tableData"></t-table>
      </t-tag>
    </t-tag>
  </div>
</template>
