(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ToduAvatar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToduAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@rive-app/react-canvas/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ToduAvatar({ emotion = 'idle', size = 110, zoom = 1.3 }) {
    _s();
    const { rive, RiveComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"])({
        src: '/todufinal.riv',
        stateMachines: 'State Machine 1',
        autoplay: true,
        // Fit.Contain nunca recorta el artboard: siempre se ve completo y centrado.
        // El "acercamiento" para que se vea más grande lo controlamos nosotros
        // con la prop `zoom`, no dejando que Rive decida el recorte (Cover).
        layout: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layout"]({
            fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fit"].Contain,
            alignment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alignment"].Center
        })
    });
    // 1. Inputs de las Emociones
    const smilingInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, 'State Machine 1', 'Smiling');
    const happyInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, 'State Machine 1', 'Happy');
    const sadInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, 'State Machine 1', 'Sad');
    const scaredInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, 'State Machine 1', 'Scared');
    const surprisedInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, 'State Machine 1', 'Surprised');
    // 2. Inputs de los Accesorios (Desbloqueables)
    const easterInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, 'State Machine 1', 'Easter');
    const halloweenInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, 'State Machine 1', 'Halloween');
    const christmasInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, 'State Machine 1', 'Christmas');
    // Apagar accesorios por defecto al cargar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToduAvatar.useEffect": ()=>{
            if (easterInput) easterInput.value = false;
            if (halloweenInput) halloweenInput.value = false;
            if (christmasInput) christmasInput.value = false;
        }
    }["ToduAvatar.useEffect"], [
        easterInput,
        halloweenInput,
        christmasInput
    ]);
    // Manejar el cambio de emociones
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToduAvatar.useEffect": ()=>{
            if (!rive) return;
            // Reseteamos todas a falso primero
            if (smilingInput) smilingInput.value = false;
            if (happyInput) happyInput.value = false;
            if (sadInput) sadInput.value = false;
            if (scaredInput) scaredInput.value = false;
            if (surprisedInput) surprisedInput.value = false;
            // Activamos la que pasamos por prop
            switch(emotion){
                case 'smiling':
                    if (smilingInput) smilingInput.value = true;
                    break;
                case 'happy':
                    if (happyInput) happyInput.value = true;
                    break;
                case 'sad':
                    if (sadInput) sadInput.value = true;
                    break;
                case 'scared':
                    if (scaredInput) scaredInput.value = true;
                    break;
                case 'surprised':
                    if (surprisedInput) surprisedInput.value = true;
                    break;
                case 'idle':
                default:
                    break;
            }
        }
    }["ToduAvatar.useEffect"], [
        emotion,
        rive,
        smilingInput,
        happyInput,
        sadInput,
        scaredInput,
        surprisedInput
    ]);
    return(// 1. El marco exacto: tamaño fijo que definís desde fuera (size)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size
        },
        className: "relative flex justify-center items-center overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex justify-center items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: `${zoom * 100}%`,
                    height: `${zoom * 100}%`
                },
                className: "flex justify-center items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiveComponent, {
                    className: "w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/ToduAvatar.jsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ToduAvatar.jsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ToduAvatar.jsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ToduAvatar.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this));
}
_s(ToduAvatar, "OUeyWhuvR/5nCPniqsNa6iz0Bgg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"]
    ];
});
_c = ToduAvatar;
var _c;
__turbopack_context__.k.register(_c, "ToduAvatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/arcade/dados/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DadosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToduAvatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ToduAvatar.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// === LÓGICA MATEMÁTICA ===
const calculatePoints = (values)=>{
    if (values.length === 0) return 0;
    const sorted = [
        ...values
    ].sort((a, b)=>a - b);
    // 1. Detección de Escaleras (Straight)
    // Escalera pequeña (1-2-3-4-5) o grande (2-3-4-5-6)
    const isSmallStraight = [
        1,
        2,
        3,
        4,
        5
    ].every((v)=>sorted.includes(v));
    const isLargeStraight = [
        2,
        3,
        4,
        5,
        6
    ].every((v)=>sorted.includes(v));
    if (isSmallStraight || isLargeStraight) {
        return 1500; // ¡Premio gordo por la escalera!
    }
    // 2. Lógica tradicional de Farkle (1s, 5s y Tríos)
    let score = 0;
    const counts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };
    values.forEach((v)=>{
        if (v) counts[v]++;
    });
    for(let i = 1; i <= 6; i++){
        const count = counts[i];
        if (count >= 3) {
            if (i === 1) score += 1000 + (count - 3) * 100;
            else score += i * 100 + (i === 5 ? (count - 3) * 50 : 0);
        } else {
            if (i === 1) score += count * 100;
            if (i === 5) score += count * 50;
        }
    }
    return score;
};
const isBust = (values)=>values.length > 0 && calculatePoints(values) === 0;
const getScoringIndices = (diceArray)=>{
    const counts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };
    diceArray.forEach((d)=>{
        if (!d.locked && d.value) counts[d.value]++;
    });
    const indices = [];
    diceArray.forEach((d, i)=>{
        if (!d.locked && d.value) {
            if (d.value === 1 || d.value === 5 || counts[d.value] >= 3) indices.push(i);
        }
    });
    return indices;
};
const META_PUNTOS = 3000;
// === COMPONENTE VISUAL DEL DADO (PUNTITOS) ===
const DieFace = ({ value })=>{
    if (!value) return null;
    const dot = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-2.5 h-2.5 bg-current rounded-full shadow-[0_0_5px_currentColor]"
    }, void 0, false, {
        fileName: "[project]/src/app/arcade/dados/page.js",
        lineNumber: 58,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0));
    const empty = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
        fileName: "[project]/src/app/arcade/dados/page.js",
        lineNumber: 59,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0));
    const faces = {
        1: [
            empty,
            empty,
            empty,
            empty,
            dot,
            empty,
            empty,
            empty,
            empty
        ],
        2: [
            empty,
            empty,
            dot,
            empty,
            empty,
            empty,
            dot,
            empty,
            empty
        ],
        3: [
            empty,
            empty,
            dot,
            empty,
            dot,
            empty,
            dot,
            empty,
            empty
        ],
        4: [
            dot,
            empty,
            dot,
            empty,
            empty,
            empty,
            dot,
            empty,
            dot
        ],
        5: [
            dot,
            empty,
            dot,
            empty,
            dot,
            empty,
            dot,
            empty,
            dot
        ],
        6: [
            dot,
            empty,
            dot,
            dot,
            empty,
            dot,
            dot,
            empty,
            dot
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 grid-rows-3 w-full h-full p-2 place-items-center",
        children: faces[value].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: d
            }, i, false, {
                fileName: "[project]/src/app/arcade/dados/page.js",
                lineNumber: 72,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/app/arcade/dados/page.js",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DieFace;
function DadosPage() {
    _s();
    const [showHelp, setShowHelp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estados del Juego
    const [dice, setDice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill({
        value: null,
        locked: false,
        selected: false
    }));
    const [turnScore, setTurnScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playerScore, setPlayerScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [toduScore, setToduScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activePlayer, setActivePlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('player');
    const [winner, setWinner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRolling, setIsRolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Estado para controlar la emoción del avatar de Todú en tiempo real
    const [toduEmotion, setToduEmotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    // --- Prototipo de barra de apuesta de XP (solo visual por ahora, NO está
    // conectada a /xp/atomic ni a ningún saldo real — es para ver cómo se
    // vería y se sentiría antes de tocar el motor de XP real). ---
    const APUESTA_MAX_DEMO = 100; // tope de ejemplo; en real sería el XP del usuario
    const [apuestaXP, setApuestaXP] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [apuestaConfirmada, setApuestaConfirmada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Todú reacciona al tamaño de la apuesta mientras el jugador todavía
    // no confirma: se ríe si apuestas muy poco, se asombra si apuestas mucho.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DadosPage.useEffect": ()=>{
            if (apuestaConfirmada) return;
            if (apuestaXP <= APUESTA_MAX_DEMO * 0.15) setToduEmotion('happy');
            else if (apuestaXP >= APUESTA_MAX_DEMO * 0.7) setToduEmotion('surprised');
            else setToduEmotion('idle');
        }
    }["DadosPage.useEffect"], [
        apuestaXP,
        apuestaConfirmada
    ]);
    // === TURNO DEL JUGADOR ===
    const rollDice = ()=>{
        setIsRolling(true);
        setMessage('');
        setToduEmotion('idle'); // Reseteamos emoción
        const currentSelectedValues = dice.filter((d)=>d.selected && !d.locked).map((d)=>d.value);
        const newPoints = calculatePoints(currentSelectedValues);
        setTurnScore((prev)=>prev + newPoints);
        setTimeout(()=>{
            let newDice = dice.map((d)=>{
                if (d.locked || d.selected) return {
                    ...d,
                    locked: true,
                    selected: false
                };
                return {
                    value: Math.floor(Math.random() * 6) + 1,
                    locked: false,
                    selected: false
                };
            });
            if (newDice.every((d)=>d.locked)) {
                newDice = Array.from({
                    length: 6
                }, ()=>({
                        value: Math.floor(Math.random() * 6) + 1,
                        locked: false,
                        selected: false
                    }));
            }
            setDice(newDice);
            setIsRolling(false);
            if (isBust(newDice.filter((d)=>!d.locked).map((d)=>d.value))) {
                setMessage('¡ZOUNDS! Perdiste el turno.');
                setToduEmotion('happy'); // Todú se ríe de que perdiste
                setTimeout(()=>{
                    passTurn('todu');
                }, 2000);
            }
        }, 500);
    };
    const toggleDieSelection = (index)=>{
        if (activePlayer !== 'player' || dice[index].locked || isRolling || message || dice[index].value === null) return;
        const newDice = [
            ...dice
        ];
        newDice[index].selected = !newDice[index].selected;
        setDice(newDice);
    };
    const bankPoints = ()=>{
        const currentSelectedValues = dice.filter((d)=>d.selected && !d.locked).map((d)=>d.value);
        const newPoints = calculatePoints(currentSelectedValues);
        setPlayerScore((prev)=>prev + turnScore + newPoints);
        setToduEmotion('idle');
        passTurn('todu');
    };
    const passTurn = (nextPlayer)=>{
        setTurnScore(0);
        setDice(Array(6).fill({
            value: null,
            locked: false,
            selected: false
        }));
        setMessage('');
        setActivePlayer(nextPlayer);
    };
    // === INTELIGENCIA ARTIFICIAL DE TODÚ ===
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DadosPage.useEffect": ()=>{
            let isMounted = true;
            if (activePlayer !== 'todu' || winner) return;
            const playToduTurn = {
                "DadosPage.useEffect.playToduTurn": async ()=>{
                    let activeDice = Array(6).fill({
                        value: null,
                        locked: false,
                        selected: false
                    });
                    let currentTurnScore = 0;
                    setToduEmotion('idle');
                    const updateUI = {
                        "DadosPage.useEffect.playToduTurn.updateUI": async (d, s, delayMs = 1000)=>{
                            if (!isMounted) return;
                            setDice([
                                ...d
                            ]);
                            setTurnScore(s);
                            await new Promise({
                                "DadosPage.useEffect.playToduTurn.updateUI": (r)=>setTimeout(r, delayMs)
                            }["DadosPage.useEffect.playToduTurn.updateUI"]);
                        }
                    }["DadosPage.useEffect.playToduTurn.updateUI"];
                    setMessage('Todú está pensando...');
                    await new Promise({
                        "DadosPage.useEffect.playToduTurn": (r)=>setTimeout(r, 1200)
                    }["DadosPage.useEffect.playToduTurn"]);
                    while(isMounted && activePlayer === 'todu' && !winner){
                        setMessage('Todú tira los dados...');
                        setIsRolling(true);
                        activeDice = activeDice.map({
                            "DadosPage.useEffect.playToduTurn": (d)=>d.locked || d.selected ? {
                                    ...d,
                                    locked: true,
                                    selected: false
                                } : {
                                    value: Math.floor(Math.random() * 6) + 1,
                                    locked: false,
                                    selected: false
                                }
                        }["DadosPage.useEffect.playToduTurn"]);
                        if (activeDice.every({
                            "DadosPage.useEffect.playToduTurn": (d)=>d.locked
                        }["DadosPage.useEffect.playToduTurn"])) activeDice = Array.from({
                            length: 6
                        }, {
                            "DadosPage.useEffect.playToduTurn": ()=>({
                                    value: Math.floor(Math.random() * 6) + 1,
                                    locked: false,
                                    selected: false
                                })
                        }["DadosPage.useEffect.playToduTurn"]);
                        await updateUI(activeDice, currentTurnScore, 600);
                        setIsRolling(false);
                        const unlockedVals = activeDice.filter({
                            "DadosPage.useEffect.playToduTurn.unlockedVals": (d)=>!d.locked
                        }["DadosPage.useEffect.playToduTurn.unlockedVals"]).map({
                            "DadosPage.useEffect.playToduTurn.unlockedVals": (d)=>d.value
                        }["DadosPage.useEffect.playToduTurn.unlockedVals"]);
                        if (isBust(unlockedVals)) {
                            setMessage('¡Todú sacó ZOUNDS y pierde el turno!');
                            setToduEmotion('sad'); // Todú se sorprende/entristece por perder turno
                            await new Promise({
                                "DadosPage.useEffect.playToduTurn": (r)=>setTimeout(r, 2500)
                            }["DadosPage.useEffect.playToduTurn"]);
                            if (isMounted) {
                                setToduEmotion('idle');
                                passTurn('player');
                            }
                            return;
                        }
                        setMessage('Todú separa dados...');
                        const scoringIndices = getScoringIndices(activeDice);
                        scoringIndices.forEach({
                            "DadosPage.useEffect.playToduTurn": (i)=>activeDice[i].selected = true
                        }["DadosPage.useEffect.playToduTurn"]);
                        await updateUI(activeDice, currentTurnScore, 1000);
                        const selectedVals = activeDice.filter({
                            "DadosPage.useEffect.playToduTurn.selectedVals": (d)=>d.selected && !d.locked
                        }["DadosPage.useEffect.playToduTurn.selectedVals"]).map({
                            "DadosPage.useEffect.playToduTurn.selectedVals": (d)=>d.value
                        }["DadosPage.useEffect.playToduTurn.selectedVals"]);
                        currentTurnScore += calculatePoints(selectedVals);
                        setToduEmotion('happy'); // Se pone feliz porque sumó puntos
                        await updateUI(activeDice, currentTurnScore, 1000);
                        const unlockedCount = activeDice.filter({
                            "DadosPage.useEffect.playToduTurn": (d)=>!d.locked && !d.selected
                        }["DadosPage.useEffect.playToduTurn"]).length;
                        if (toduScore + currentTurnScore >= META_PUNTOS || unlockedCount === 0 || currentTurnScore >= 400 || unlockedCount <= 2) {
                            setMessage('Todú se planta y asegura.');
                            await new Promise({
                                "DadosPage.useEffect.playToduTurn": (r)=>setTimeout(r, 1500)
                            }["DadosPage.useEffect.playToduTurn"]);
                            if (isMounted) {
                                setToduScore({
                                    "DadosPage.useEffect.playToduTurn": (prev)=>prev + currentTurnScore
                                }["DadosPage.useEffect.playToduTurn"]);
                                setToduEmotion('idle');
                                passTurn('player');
                            }
                            return;
                        }
                        setToduEmotion('idle');
                    }
                }
            }["DadosPage.useEffect.playToduTurn"];
            playToduTurn();
            return ({
                "DadosPage.useEffect": ()=>{
                    isMounted = false;
                }
            })["DadosPage.useEffect"];
        }
    }["DadosPage.useEffect"], [
        activePlayer,
        winner,
        toduScore
    ]);
    // === COMPROBAR GANADOR ===
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DadosPage.useEffect": ()=>{
            if (playerScore >= META_PUNTOS) {
                setWinner('Jorge');
                setToduEmotion('sad');
            } else if (toduScore >= META_PUNTOS) {
                setWinner('Todú');
                setToduEmotion('surprised');
            }
        }
    }["DadosPage.useEffect"], [
        playerScore,
        toduScore
    ]);
    const selectedValues = dice.filter((d)=>d.selected && !d.locked).map((d)=>d.value);
    const currentSelectionPoints = calculatePoints(selectedValues);
    const canRollOrBank = currentSelectionPoints > 0;
    const isFirstRoll = dice.every((d)=>d.value === null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#050505] text-slate-200 font-sans pb-10 overflow-x-hidden relative selection:bg-cyan-500 selection:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-0 opacity-10",
                style: {
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"
                }, void 0, false, {
                    fileName: "[project]/src/app/arcade/dados/page.js",
                    lineNumber: 256,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/arcade/dados/page.js",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative z-10 sticky top-0 bg-[#050505]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-cyan-500/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/arcade",
                                className: "w-10 h-10 rounded-full bg-black border border-cyan-500/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 262,
                                        columnNumber: 110
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-sm font-black text-cyan-400 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]",
                                children: "Dados vs Todú"
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowHelp(true),
                        className: "w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-900 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.3)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-black text-lg",
                            children: "?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/arcade/dados/page.js",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/arcade/dados/page.js",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 max-w-md mx-auto px-6 flex flex-col mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 rounded-2xl p-3 text-center border transition-all ${activePlayer === 'player' ? 'bg-cyan-900/40 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-black/40 border-cyan-500/20'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-cyan-300/70 uppercase tracking-widest font-bold mb-1",
                                        children: "Tú"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black text-white",
                                        children: playerScore
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-cyan-600 font-black text-xl italic opacity-50 px-2",
                                children: "VS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 rounded-2xl p-3 text-center border transition-all ${activePlayer === 'todu' ? 'bg-purple-900/40 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'bg-black/40 border-purple-500/20'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-purple-300/70 uppercase tracking-widest font-bold mb-1",
                                        children: "Todú"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black text-white",
                                        children: toduScore
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center -mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-32 h-32",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToduAvatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                emotion: toduEmotion,
                                size: 132
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/arcade/dados/page.js",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-slate-500 font-black uppercase tracking-widest",
                            children: [
                                "Meta: ",
                                META_PUNTOS,
                                " PTS"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/arcade/dados/page.js",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    isFirstRoll && !apuestaConfirmada ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/60 border-2 border-amber-500/30 rounded-3xl p-5 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-amber-400 font-black uppercase tracking-widest",
                                        children: "Apuesta tu XP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-black text-amber-400",
                                        children: [
                                            apuestaXP,
                                            " XP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 0,
                                max: APUESTA_MAX_DEMO,
                                step: 5,
                                value: apuestaXP,
                                onChange: (e)=>setApuestaXP(Number(e.target.value)),
                                className: "w-full accent-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            APUESTA_MAX_DEMO,
                                            " (todo)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setApuestaConfirmada(true),
                                className: "w-full py-3 rounded-full font-black uppercase tracking-widest text-sm bg-amber-500 hover:bg-amber-400 text-black transition-all active:scale-95",
                                children: "Confirmar apuesta"
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this) : apuestaConfirmada ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full",
                            children: [
                                "Apuesta activa: ",
                                apuestaXP,
                                " XP"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/arcade/dados/page.js",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-black/60 border-2 rounded-3xl p-6 min-h-[280px] flex flex-col justify-center items-center relative transition-colors ${activePlayer === 'player' ? 'border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.05)]' : 'border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.05)]'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-0 w-full text-center",
                                children: message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-black uppercase tracking-widest text-white animate-pulse bg-black/80 px-4 py-1 rounded-full border border-white/10",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs font-black uppercase tracking-widest ${activePlayer === 'player' ? 'text-cyan-400' : 'text-purple-400'}`,
                                    children: activePlayer === 'player' ? 'Tu Turno' : 'Turno de Todú'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 mb-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1",
                                        children: "Acumulado del Turno"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-4xl font-black drop-shadow-[0_0_10px_currentColor] ${activePlayer === 'player' ? 'text-cyan-400' : 'text-purple-400'}`,
                                        children: turnScore + (activePlayer === 'player' ? currentSelectionPoints : 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            isFirstRoll && !message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center opacity-50 my-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-5xl mb-4 block",
                                        children: "🎲"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold tracking-widest uppercase",
                                        children: "Tira para empezar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-5 w-full place-items-center",
                                children: dice.map((d, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleDieSelection(index),
                                        disabled: d.locked || d.value === null || activePlayer !== 'player',
                                        className: `w-16 h-16 rounded-xl transition-all duration-300 transform ${isRolling ? 'animate-spin opacity-50 scale-75' : 'scale-100'} ${d.value === null ? 'bg-transparent border-2 border-slate-800' : d.locked ? 'bg-slate-900 border-2 border-slate-700 text-slate-600 cursor-not-allowed opacity-40' : d.selected ? activePlayer === 'player' ? 'bg-cyan-600 border-2 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.8)] -translate-y-2' : 'bg-purple-600 border-2 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.8)] -translate-y-2' : 'bg-slate-800 border-2 border-slate-500 text-white hover:border-white shadow-lg'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DieFace, {
                                            value: d.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                            lineNumber: 376,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-8 flex flex-col gap-4 transition-opacity duration-500 ${activePlayer === 'player' ? 'opacity-100' : 'opacity-30 pointer-events-none'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: rollDice,
                                disabled: !isFirstRoll && !canRollOrBank && !message || isFirstRoll && !apuestaConfirmada,
                                className: `w-full py-4 rounded-full font-black uppercase tracking-widest transition-all ${!isFirstRoll && !canRollOrBank && !message || isFirstRoll && !apuestaConfirmada ? 'bg-slate-800 text-slate-500' : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95'}`,
                                children: isFirstRoll ? 'Tirar Dados' : 'Separar y Volver a Tirar'
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: bankPoints,
                                disabled: isFirstRoll || turnScore + currentSelectionPoints === 0 || message !== '',
                                className: `w-full py-4 rounded-full font-black uppercase tracking-widest transition-all border-2 ${isFirstRoll || turnScore + currentSelectionPoints === 0 || message !== '' ? 'border-slate-800 text-slate-700' : 'border-cyan-500 text-cyan-400 hover:bg-cyan-950 active:scale-95'}`,
                                children: "Plantarse y Asegurar Puntos"
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center border-t-4 border-cyan-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 bg-[#0b1120] rounded-full p-4 border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.3)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToduAvatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    emotion: winner === 'Jorge' ? 'surprised' : 'happy',
                                    size: 100
                                }, void 0, false, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 416,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 415,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `text-4xl font-black tracking-widest mb-4 drop-shadow-[0_0_15px_currentColor] ${winner === 'Jorge' ? 'text-cyan-400' : 'text-purple-400'}`,
                                children: winner === 'Jorge' ? '¡GANASTE!' : 'TODÚ GANA'
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 422,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-300 font-medium mb-2",
                                children: "Marcador Final"
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 426,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-2xl font-black mb-10 bg-white/10 px-6 py-2 rounded-2xl border border-white/20",
                                children: [
                                    "Tú: ",
                                    playerScore,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 mx-2",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 430,
                                        columnNumber: 34
                                    }, this),
                                    " Todú: ",
                                    toduScore
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 429,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPlayerScore(0);
                                    setToduScore(0);
                                    setWinner(null);
                                    setActivePlayer('player');
                                    setApuestaConfirmada(false);
                                    setApuestaXP(20);
                                },
                                className: "bg-cyan-600 text-white font-black uppercase tracking-widest px-10 py-4 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.6)] mb-6 border border-cyan-400 active:scale-95 transition-transform",
                                children: "Jugar Revancha"
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 433,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/arcade",
                                className: "text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors",
                                children: "Volver al Lobby"
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 437,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/arcade/dados/page.js",
                        lineNumber: 412,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/arcade/dados/page.js",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            showHelp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#111827] border border-cyan-500/30 rounded-3xl p-6 w-full max-w-sm relative shadow-[0_0_30px_rgba(6,182,212,0.2)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowHelp(false),
                            className: "absolute top-4 right-4 text-slate-400 hover:text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 447,
                                    columnNumber: 110
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/arcade/dados/page.js",
                                lineNumber: 447,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/arcade/dados/page.js",
                            lineNumber: 446,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-6 border-b border-white/5 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 flex-shrink-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]",
                                        viewBox: "0 0 100 100",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M75 45 C85 40, 90 60, 80 65",
                                                stroke: "white",
                                                strokeWidth: "6",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/arcade/dados/page.js",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                cx: "50",
                                                cy: "60",
                                                rx: "30",
                                                ry: "28",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/arcade/dados/page.js",
                                                lineNumber: 454,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "50",
                                                y1: "32",
                                                x2: "50",
                                                y2: "15",
                                                stroke: "white",
                                                strokeWidth: "5",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/arcade/dados/page.js",
                                                lineNumber: 455,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "50",
                                                cy: "12",
                                                r: "4",
                                                fill: "#06B6D4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/arcade/dados/page.js",
                                                lineNumber: 456,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M35 55 Q40 48 45 55",
                                                stroke: "#06B6D4",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/arcade/dados/page.js",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M55 55 Q60 48 65 55",
                                                stroke: "#06B6D4",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/arcade/dados/page.js",
                                                lineNumber: 458,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/arcade/dados/page.js",
                                        lineNumber: 452,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-cyan-400 font-black tracking-widest uppercase text-sm",
                                            children: "Todú te explica"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                            lineNumber: 462,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 font-medium mt-0.5",
                                            children: [
                                                "El primero en ",
                                                META_PUNTOS,
                                                " gana"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                            lineNumber: 463,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/arcade/dados/page.js",
                            lineNumber: 450,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-sm text-slate-300 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Tira los 6 dados. Para seguir tirando, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold",
                                            children: "selecciona dados que sumen puntos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                            lineNumber: 468,
                                            columnNumber: 57
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "bg-black/50 rounded-xl p-4 border border-white/5 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        "Dado con",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 rounded-md border border-cyan-500/50 flex items-center justify-center bg-slate-900",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_3px_currentColor]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/arcade/dados/page.js",
                                                                lineNumber: 475,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                                            lineNumber: 474,
                                                            columnNumber: 21
                                                        }, this),
                                                        "(1)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                    lineNumber: 472,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-white",
                                                    children: "100 pts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        "Dado con",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 rounded-md border border-cyan-500/50 bg-slate-900 p-0.5 grid grid-cols-3 grid-rows-3 place-items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-0.5 h-0.5 bg-cyan-400 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                                    lineNumber: 487,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                                    lineNumber: 487,
                                                                    columnNumber: 83
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-0.5 h-0.5 bg-cyan-400 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                                    lineNumber: 487,
                                                                    columnNumber: 94
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                                    lineNumber: 488,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-0.5 h-0.5 bg-cyan-400 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                                    lineNumber: 488,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                                    lineNumber: 488,
                                                                    columnNumber: 94
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-0.5 h-0.5 bg-cyan-400 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                                    lineNumber: 489,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                                    lineNumber: 489,
                                                                    columnNumber: 83
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-0.5 h-0.5 bg-cyan-400 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                                    lineNumber: 489,
                                                                    columnNumber: 94
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                                            lineNumber: 486,
                                                            columnNumber: 21
                                                        }, this),
                                                        "(5)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-white",
                                                    children: "50 pts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                    lineNumber: 493,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex justify-between pt-1 border-t border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Trío de 1s"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                    lineNumber: 496,
                                                    columnNumber: 84
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-yellow-400",
                                                    children: "1000 pts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                    lineNumber: 496,
                                                    columnNumber: 108
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Otros Tríos (ej. 4-4-4)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                    lineNumber: 497,
                                                    columnNumber: 54
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-white",
                                                    children: "Valor x 100"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                                    lineNumber: 497,
                                                    columnNumber: 91
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/arcade/dados/page.js",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-rose-400 font-bold bg-rose-500/10 p-3 rounded-xl border border-rose-500/20 text-xs",
                                    children: "⚠️ Si tiras y no sale ningún 1, 5 o trío, pierdes los puntos del turno (ZOUNDS) y le toca a Todú."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/arcade/dados/page.js",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/arcade/dados/page.js",
                            lineNumber: 467,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/arcade/dados/page.js",
                    lineNumber: 445,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/arcade/dados/page.js",
                lineNumber: 444,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/arcade/dados/page.js",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
_s(DadosPage, "sCgfDwcf884msYsfxQL1ls3rCYI=");
_c1 = DadosPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "DieFace");
__turbopack_context__.k.register(_c1, "DadosPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1ldx98r._.js.map