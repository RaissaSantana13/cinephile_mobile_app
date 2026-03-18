# Cinephile Mobile App

![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)
![NativeWind](https://img.shields.io/badge/NativeWind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Cinephile** é uma aplicação móvel moderna desenvolvida para entusiastas do cinema. O app permite explorar filmes em tendência, pesquisar títulos específicos e gerir uma lista personalizada de favoritos, oferecendo uma experiência fluida e visualmente atraente.

---
<div align="center">
  <img src="https://github.com/user-attachments/assets/fa14c0a2-56cc-492a-962b-025e461a8321" alt="Cinephile Interface" width="80%">

  <br><br>

  <a href="https://player.cloudinary.com/embed/?cloud_name=dzkjdll3l&public_id=Cinephile" target="_blank">
    <img src="https://img.shields.io/badge/ASSISTIR-DEMO%20VÍDEO-red?style=for-the-badge&logo=youtube" alt="Assistir Demonstração do Cinephile">
  </a>
</div>
---


## 🚀 Funcionalidades Principais

* **Exploração de Tendências:** Visualize os filmes mais populares do momento em um carrossel interativo.
* **Pesquisa Inteligente:** Encontre filmes rapidamente através de uma barra de busca dinâmica.
* **Detalhes do Filme:** Informações completas sobre cada obra, incluindo sinopse, avaliação e data de lançamento.
* **Favoritos (Lista de Desejos):** Salve filmes para assistir mais tarde utilizando a integração com o Appwrite.
* **Interface Premium:** Design elegante com suporte a temas escuros, ícones personalizados e tipografia refinada.

---

## 🛠️ Tecnologias Utilizadas

* **Framework:** [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/).
* **Estilização:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS para React Native).
* **Backend as a Service (BaaS):** [Appwrite](https://appwrite.io/) para autenticação e banco de dados de favoritos.
* **Consumo de API:** [TMDB API](https://www.themoviedb.org/documentation/api) para dados de filmes em tempo real.
* **Navegação:** Expo Router (File-based routing).

---

## 📂 Estrutura do Projeto

* **`app/`**: Contém as rotas e telas principais (Tabs de Home, Search, Saved e Profile).
* **`components/`**: Componentes reutilizáveis como `MovieCard`, `TrendingCard` e `SearchBar`.
* **`services/`**: Configurações de API (`api.ts`) e integração com o Appwrite.
* **`constants/`**: Gerenciamento de assets (ícones e imagens) e temas.
* **`interfaces/`**: Definições de tipos TypeScript para garantir segurança no código.

---

## ⚙️ Configuração Local

1.  Clone o repositório.
2.  Instale as dependências: `npm install`.
3.  Crie um arquivo `.env` baseado nas chaves necessárias para a **TMDB API** e **Appwrite**.
4.  Inicie o projeto: `npx expo start`.

---

## 👨‍💻 Autor

Projeto desenvolvido com foco em performance mobile e experiência do usuário (UX), explorando o ecossistema moderno do React Native.

---

# Cinephile Mobile App

**Cinephile** is a modern mobile application built for cinema enthusiasts. The app allows users to explore trending movies, search for specific titles, and manage a personalized watchlist, providing a fluid and visually compelling experience.

---

## 🚀 Key Features

* **Trending Exploration:** View current popular movies through an interactive trending carousel.
* **Smart Search:** Quickly find movies using a dynamic search bar.
* **Movie Details:** In-depth information about each film, including synopsis, ratings, and release dates.
* **Watchlist (Saved):** Save movies to watch later using Appwrite integration.
* **Premium UI:** Elegant design featuring dark theme support, custom icons, and refined typography.

---

## 🛠️ Tech Stack

* **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/).
* **Styling:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native).
* **Backend as a Service (BaaS):** [Appwrite](https://appwrite.io/) for authentication and the saved movies database.
* **API Consumption:** [TMDB API](https://www.themoviedb.org/documentation/api) for real-time movie data.
* **Navigation:** Expo Router (File-based routing).

---

## 📂 Project Structure

* **`app/`**: Contains main routes and screens (Home, Search, Saved, and Profile tabs).
* **`components/`**: Reusable components such as `MovieCard`, `TrendingCard`, and `SearchBar`.
* **`services/`**: API configurations (`api.ts`) and Appwrite integration.
* **`constants/`**: Asset management (icons and images) and themes.
* **`interfaces/`**: TypeScript type definitions to ensure code safety.

---

## ⚙️ Local Setup

1.  Clone the repository.
2.  Install dependencies: `npm install`.
3.  Create a `.env` file based on the required keys for **TMDB API** and **Appwrite**.
4.  Start the project: `npx expo start`.

---

## 👨‍💻 Author

Project developed with a focus on mobile performance and user experience (UX), exploring the modern React Native ecosystem.
