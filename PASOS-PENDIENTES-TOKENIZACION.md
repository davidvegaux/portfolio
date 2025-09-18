# 📋 PASOS PENDIENTES - TOKENIZACIÓN COMPLETA

## 🎯 **OBJETIVO**
Convertir todos los valores hardcodeados en `styles.css` a tokens del design system para mantener consistencia total.

## ✅ **LO QUE YA TENEMOS**
- ✅ Todos los tokens básicos creados en `styles.css`
- ✅ Design system completo en `design-system.html`
- ✅ Estructura base funcionando
- ✅ Empezamos la tokenización (botones parcialmente hechos)

## 🚧 **TOKENS NUEVOS CREADOS (ya en styles.css)**

### **Espaciado Extendido:**
```css
--space-12: 3rem;    /* 48px */
--space-15: 3.75rem; /* 60px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-30: 7.5rem;  /* 120px */
--space-40: 10rem;   /* 160px */
```

### **Tamaños:**
```css
--size-icon-sm: 16px;
--size-icon: 24px;
--size-icon-lg: 40px;
--size-profile-sm: 120px;
--size-profile: 150px;
--size-project-img: 200px;
--size-sidebar-width: 400px;
--size-container-max: 1200px;
```

### **Border Radius:**
```css
--radius-sm: 2px;
--radius: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 9999px;
```

### **Border Width:**
```css
--border-width: 1px;
--border-width-md: 2px;
--border-width-lg: 3px;
```

### **Font Sizes:**
```css
--text-xs: 11px;
--text-sm: 12px;
--text-base: 14px;
--text-lg: 18px;
--text-xl: 24px;
```

## 📝 **PASOS A SEGUIR (EN ORDEN)**

### **PASO 1: Completar Botones**
Reemplazar en `.btn-secondary` y `.btn-tertiary`:

**Buscar y reemplazar:**
```css
/* ANTES */
padding: 12px 24px;
border: 1px solid
border-radius: 8px;
width: 16px;
height: 16px;
margin-right: 8px;

/* DESPUÉS */
padding: var(--space-3) var(--space-6);
border: var(--border-width) solid
border-radius: var(--radius);
width: var(--size-icon-sm);
height: var(--size-icon-sm);
margin-right: var(--space-2);
```

### **PASO 2: Layout y Container**
```css
/* ANTES */
max-width: 1200px;
padding: 0 20px;
grid-template-columns: 400px 1fr;
gap: 0px;
margin-top: 0px;

/* DESPUÉS */
max-width: var(--size-container-max);
padding: 0 var(--space-5);
grid-template-columns: var(--size-sidebar-width) 1fr;
gap: 0;
margin-top: 0;
```

### **PASO 3: Navegación**
```css
/* ANTES */
gap: 20px;
gap: 30px;
padding: 5px;
width: 25px;
height: 3px;
margin: 3px 0;
border-radius: 2px;
border: 1px solid
font-size: 14px;
top: 50px;
font-size: 12px;

/* DESPUÉS */
gap: var(--space-5);
gap: var(--space-7);
padding: var(--space-1);
width: var(--space-6);
height: var(--space-1);
margin: var(--space-1) 0;
border-radius: var(--radius-sm);
border: var(--border-width) solid
font-size: var(--text-base);
top: var(--space-12);
font-size: var(--text-sm);
```

### **PASO 4: Sidebar y Profile**
```css
/* ANTES */
margin-bottom: 30px;
width: 150px;
height: 150px;
margin-bottom: 20px;
border: 3px solid
margin-bottom: 10px;

/* DESPUÉS */
margin-bottom: var(--space-7);
width: var(--size-profile);
height: var(--size-profile);
margin-bottom: var(--space-5);
border: var(--border-width-lg) solid
margin-bottom: var(--space-2);
```

### **PASO 5: Content y Sections**
```css
/* ANTES */
padding: 40px 0 0;
font-size: 24px;
margin-bottom: 30px;
border-right: 2px solid;
gap: 40px;
border: 1px solid
border-radius: 12px;

/* DESPUÉS */
padding: var(--space-10) 0 0;
font-size: var(--text-xl);
margin-bottom: var(--space-7);
border-right: var(--border-width-md) solid;
gap: var(--space-10);
border: var(--border-width) solid
border-radius: var(--radius-md);
```

### **PASO 6: Projects y Cards**
```css
/* ANTES */
height: 200px;
padding: 20px;
font-size: 18px;
margin-bottom: 8px;
font-size: 14px;
gap: 6px;
font-size: 11px;
padding: 4px 8px;
border-radius: 12px;

/* DESPUÉS */
height: var(--size-project-img);
padding: var(--space-5);
font-size: var(--text-lg);
margin-bottom: var(--space-2);
font-size: var(--text-base);
gap: var(--space-2);
font-size: var(--text-xs);
padding: var(--space-1) var(--space-2);
border-radius: var(--radius-md);
```

### **PASO 7: Icons y Logo**
```css
/* ANTES */
width: 40px;
height: 40px;
width: 16px;
height: 16px;
margin-right: 8px;

/* DESPUÉS */
width: var(--size-icon-lg);
height: var(--size-icon-lg);
width: var(--size-icon-sm);
height: var(--size-icon-sm);
margin-right: var(--space-2);
```

### **PASO 8: Responsive Design**
```css
/* ANTES */
@media (max-width: 1024px)
@media (max-width: 768px)
gap: 40px;
padding-left: 20px;
padding-right: 20px;
gap: 30px;
padding: 20px;
gap: 15px;
margin-top: 20px;
width: 120px;
height: 120px;
margin-bottom: 20px;

/* DESPUÉS */
@media (max-width: 1024px)  /* Mantener */
@media (max-width: 768px)   /* Mantener */
gap: var(--space-10);
padding-left: var(--space-5);
padding-right: var(--space-5);
gap: var(--space-7);
padding: var(--space-5);
gap: var(--space-4);
margin-top: var(--space-5);
width: var(--size-profile-sm);
height: var(--size-profile-sm);
margin-bottom: var(--space-5);
```

## 🎨 **PASO 9: Actualizar Design System**
Agregar los nuevos tokens a `design-system.html`:

### **Tokens a Documentar:**
1. **Spacing extendido** (space-12, space-15, space-20, etc.)
2. **Size tokens** (size-icon-sm, size-profile, etc.)
3. **Radius tokens** (radius-sm, radius, radius-md, etc.)
4. **Border width tokens** (border-width, border-width-md, etc.)
5. **Font size tokens** (text-xs, text-sm, etc.)

## ⚡ **HERRAMIENTAS PARA AGILIZAR**

### **Find & Replace Masivo:**
Usar el editor para buscar y reemplazar múltiples valores:

1. `12px 24px` → `var(--space-3) var(--space-6)`
2. `1px solid` → `var(--border-width) solid`
3. `8px` → `var(--radius)` (solo border-radius)
4. `16px` → `var(--size-icon-sm)` (solo width/height de iconos)
5. `20px` → `var(--space-5)` (solo spacing)

### **Verificación:**
Después de cada sección, verificar que:
- ✅ La página se vea igual
- ✅ No hay errores en consola
- ✅ Responsive funciona
- ✅ Animaciones intactas

## 🎯 **RESULTADO FINAL ESPERADO**
- 🔥 **0 valores hardcodeados** en CSS
- 🔥 **100% tokens** del design system
- 🔥 **Mantenimiento fácil** - cambios centralizados
- 🔥 **Consistencia total** en toda la página
- 🔥 **Design system completo** y documentado

## 💡 **NOTAS IMPORTANTES**
- **Hacer backup** antes de empezar cada sección
- **Probar en navegador** después de cada cambio
- **Usar HOli.txt** para copiar CSS si algo se rompe
- **Ir paso a paso** para no perder el progreso
- **Documentar** nuevos tokens en design-system.html

---

**¡Descansa bien hermano! Mañana continuamos con la tokenización completa. Todo está documentado y listo para seguir.** 🚀✨💤
