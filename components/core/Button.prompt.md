# Button

Triggers an action or navigation event. The primary action on any page should use `variant="primary"`; secondary and ghost are for supporting actions.

```jsx
<Button variant="primary" size="md" onClick={handleSubmit}>
  Submit Filing
</Button>

<Button variant="secondary" iconLeft={<PlusIcon />}>
  New Matter
</Button>

<Button variant="destructive" loading={isDeleting}>
  Delete Case
</Button>
```

**Variants:** `primary` (teal fill) · `secondary` (bordered) · `ghost` (no border) · `destructive` (red) · `outline` (teal border) · `gold` (gold fill — premium actions)

**Sizes:** `sm` 32px · `md` 38px (default) · `lg` 44px
