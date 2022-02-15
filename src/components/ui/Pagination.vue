<template>
  <div class="d-md-flex justify-content-between align-items-center pt-3 pb-2">
    <nav class="mb-4" aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous"><i class="ai-chevron-left"></i></a>
        </li>
        <li class="page-item d-sm-none"><span class="page-link page-link-static">2 / 10</span></li>
        <li class="page-item d-none d-sm-block"><a class="page-link" href="#">1</a></li>
        <li class="page-item active d-none d-sm-block" aria-current="page">
          <span class="page-link">2<span class="visually-hidden">(current)</span></span>
        </li>
        <li class="page-item d-none d-sm-block"><a class="page-link" href="#">3</a></li>
        <li class="page-item d-none d-sm-block"><a class="page-link" href="#">4</a></li>
        <li class="page-item d-none d-sm-block">...</li>
        <li class="page-item d-none d-sm-block"><a class="page-link" href="#">10</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next"><i class="ai-chevron-right"></i></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
};
</script>
<style lang="sass" scoped>
</style>