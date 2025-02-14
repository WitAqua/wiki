---
layout: doc
prev: false
next: false
---
![WitAqua](/assets/witaqua.svg)

<h1 align="center">始めましょう</h1>
<br />
<div class="card-container">
  <a href="/ja/devices/install" class="card">
    <h2>インストール</h2>
    <p class="description">デバイスに WitAqua をインストールする方法。</p>
  </a>
  <a href="/ja/developers" class="card">
    <h2>ビルド</h2>
    <p class="description">ビルド方法を学びましょう。</p>
  </a>
</div>

<style scoped>
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
}

.card {
  display: block;
  height:150px;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid transparent;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  transition: color 0.3s ease;
  white-space: nowrap;
  border: none;
  padding-bottom: 0;
}

.card .description {
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  line-height: 1.4;
}

.card-container .card {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.card-container .card:nth-child(1) {
  animation-delay: 0s;
}

.card-container .card:nth-child(2) {
  animation-delay: 0.1s;
}

.card-container .card:nth-child(3) {
  animation-delay: 0.2s;
}

.card-container .card:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
