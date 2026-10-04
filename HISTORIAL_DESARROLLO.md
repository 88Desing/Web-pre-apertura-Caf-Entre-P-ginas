# Historial de desarrollo — Café Entre Páginas

## V11.1 — 04/10/2026
### Ajustes de contenido y navegación
- `Explora Café Entre Páginas a tu manera` pasa a `Descubre Café Entre Páginas a tu manera`.
- Eliminada la referencia residual al antiguo carrusel.
- Club Café Entre Páginas:
  - `Ventajas para socios` pasa a ser la primera opción y utiliza la creatividad resumen de beneficios.
  - Se mantiene `Beneficio 1`.
  - Se crea un nuevo `Beneficio 2` asociado a la creatividad específica de cumpleaños.
- Packs:
  - `Personalizado` se mueve de `Cumpleaños Infantiles` a `Para Regalar`, después de `Historia` y `Relatos`.
- Comida > Snacks:
  - Se incorpora la nueva creatividad `Snacks para niños` junto a las ya existentes de snacks generales y snacks para bebés.

### UAT End-to-End — Pedidos online Square
**Fecha:** 04/10/2026  
**Objetivo:** validar el flujo real completo desde la web de Café Entre Páginas hasta Square y el procesamiento de pago.

**Flujo ejecutado:**
1. Acceso desde la web de Café Entre Páginas al canal de pedidos online de Square.
2. Selección de producto.
3. Inclusión del producto en carrito.
4. Continuación del proceso de compra.
5. Visualización correcta de la pasarela de pago.
6. Selección de Google Pay / Google Payment.
7. Selección de una tarjeta registrada.
8. Autenticación y aprobación del pago mediante Google.
9. Recepción del email de confirmación en la cuenta asociada.
10. Recepción de la notificación bancaria del cargo / autorización.
11. Cancelación posterior del pedido desde Square por parte del comercio.
12. El cargo aparece como saldo retenido tras la cancelación, pendiente de confirmar su liberación definitiva por la entidad bancaria.

**Resultado:**
- Integración web → Square: **PASS**
- Selección de producto y carrito: **PASS**
- Checkout: **PASS**
- Google Pay / autenticación: **PASS**
- Autorización bancaria: **PASS**
- Confirmación por email: **PASS**
- Gestión de cancelación desde Square: **PASS**
- Liberación final del importe retenido: **PENDIENTE DE CONFIRMACIÓN BANCARIA**

**Conclusión:**  
El flujo principal de compra ha sido validado satisfactoriamente de extremo a extremo en entorno real. La integración se considera funcional para pedidos online. Queda únicamente verificar la liberación final de la retención tras la cancelación, proceso dependiente de los tiempos de la entidad bancaria.
