# Payments Microservice

## Stripe Webhook Setup

Para configurar y probar los webhooks de Stripe, sigue estos pasos:

1. **Trigger de eventos de Stripe**:
    ```sh
    stripe trigger payment_intent.succeeded
    ```

2. **Escuchar eventos de Stripe y reenviarlos a tu aplicación local**:
    ```sh
    stripe listen --forward-to localhost:3003/payments/webhook
    ```

## Hookdeck Setup Pruebas

Hookdeck es una herramienta que facilita la gestión de webhooks. Para configurarlo, sigue estos pasos:

1. **Instalar Hookdeck CLI**:
    ```sh
    npm install hookdeck-cli -g
    ```

2. **Iniciar sesión en Hookdeck**:
    ```sh
    hookdeck login
    ```

3. **Escuchar eventos y reenviarlos a tu aplicación local**:
    ```sh
    hookdeck listen 3003 stripe-to-localhost
    ```