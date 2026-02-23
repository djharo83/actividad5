# Cambiar la rama principal de master a main en GitHub

## 1. Renombrar la rama local

```bash
git branch -m master main
```

## 2. Subir la nueva rama main al remoto

```bash
git push -u origin main
```

## 3. Cambiar la rama principal en GitHub

- Ve a tu repositorio en GitHub.
- Haz clic en **Settings** > **Branches**.
- Cambia la rama principal (default) de `master` a `main`.

## 4. Eliminar la rama master del remoto

```bash
git push origin --delete master
```

O desde GitHub:

- Ve a la pestaña **Branches**.
- Haz clic en el icono de eliminar junto a la rama `master`.

## 5. (Opcional) Actualizar repositorios de colaboradores

```bash
git fetch origin
git checkout main
git pull
```
