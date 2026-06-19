# Card

General-purpose surface container. Use for case summary cards, document panels, form sections, and stats widgets.

```jsx
<Card header="Matter Details" hover accent="teal">
  <p>Case #2024-LFD-0091 — Commercial Litigation</p>
</Card>

<Card variant="emphasis" padding="lg">
  <h2 style={{ color: 'white' }}>Monthly Overview</h2>
</Card>

<Card variant="inset" padding="sm" footer={<Button size="sm">Save Draft</Button>}>
  <Input label="Note" placeholder="Add a case note…" />
</Card>
```

**Variants:** `default` · `inset` (recessed bg) · `emphasis` (navy bg) · `accent` (teal bg) · `gold`

**Accent borders:** `'teal'` · `'gold'` · `'danger'` · `'navy'`
