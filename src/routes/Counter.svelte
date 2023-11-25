<script lang="ts">
    import { CountStore } from '../_domains/Counter/_application/_store';

    const countStore = new CountStore();
</script>

<div class="counter">
    <button
        on:click={countStore.increment}
        aria-label="Decrease the counter by one"
    >
        <svg aria-hidden="true" viewBox="0 0 1 1">
            <path d="M0,0.5 L1,0.5" />
        </svg>
    </button>

    <div class="counter-viewport">
        <div>{$countStore}</div>
    </div>

    <button
        on:click={countStore.increment}
        aria-label="Increase the counter by one"
    >
        <svg aria-hidden="true" viewBox="0 0 1 1">
            <path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
        </svg>
    </button>

    <button
        on:click={countStore.reset}
        aria-label="Increase the counter by one"
    >
        リセット
    </button>
</div>

<style>
    .counter {
        display: flex;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin: 1rem 0;
    }

    .counter button {
        width: 2em;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background-color: transparent;
        touch-action: manipulation;
        font-size: 2rem;
    }

    .counter button:hover {
        background-color: var(--color-bg-1);
    }

    svg {
        width: 25%;
        height: 25%;
    }

    path {
        vector-effect: non-scaling-stroke;
        stroke-width: 2px;
        stroke: #444;
    }

    .counter-viewport {
        width: 8em;
        height: 4em;
        overflow: hidden;
        text-align: center;
        position: relative;
    }
</style>
