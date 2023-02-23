# SpiroKit - Templates

## Usage

1. Get your SpiroKit license [here](https://spirokit.com). We support Parity Purchasing Power. Check our website to see if you are eligible for a discount, if you need it.

2. Create a new project

`npx create-spirokit-app@latest --template [template-name]`

3. Download the `spirokit-core-[version].tgz` file from Gumroad and add it to the root of your project.

4. Install SpiroKit on your project

```sh
## for universal-app-template
cd packages/app
yarn add ../../spirokit-core-[version].tgz

## for the rest of the templates
yarn add ./spirokit-core-[version].tgz
```

5. Run your app.

```sh
## for universal-app-template
yarn web
yarn native

## for the rest of the templates
yarn start
```

For more information about how to use SpiroKit, here's the [full storybook documentation](https://docs.spirokit.com).

---

# Available Templates

## expo-template-typescript

The official SpiroKit template for Expo with Typescript

```
npx create-spirokit-app@latest --template expo-template-typescript
```

## expo-template

The official SpiroKit template for Expo

```
npx create-spirokit-app@latest --template expo-template
```

## expo-router-template:

The official SpiroKit template for Expo Router (Beta)

```
npx create-spirokit-app@latest --template expo-router-template
```

## universal-app-template-typescript:

The official SpiroKit template for Universal Apps with Solito, NextJS and Expo

```
npx create-spirokit-app@latest --template universal-app-template-typescript
```

## ecommerce-app-template-typescript`:

A SpiroKit E-Commerce app template with Typescript

![ecommerce app banner image](https://i.imgur.com/qEsULxj.jpg)

```
npx create-spirokit-app@latest --template ecommerce-app-template-typescript
```

## `travel-app-template-typescript`:

The official SpiroKit template for Expo

![travel app banner image](https://i.imgur.com/0jCWLrc.png)

```
npx create-spirokit-app@latest --template expo-template
```
