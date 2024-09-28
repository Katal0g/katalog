# Katalog monorepo

## 💻 Configuration

Après avoir récupéré le projet localement, vous pouvez installer les dépendances nécessaires avec :

```
npm i
```

Pour créer les `containers Docker` :

```
docker compose up -d
```

Des `.env` sont nécessaires au fonctionnement de l'application (pour le `front` ET le `back`). Des `.env.example` sont disponibles avec les valeurs attendues.

Lorsque ces différentes étapes sont finies, vous pouvez lancer le projet en exécutant (dans `/katalog-front` et `/katalog-back`) la commande :

```
npm run dev
```
