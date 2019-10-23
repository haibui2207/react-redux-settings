### Usage:

```jsx
<div
  style={{
    padding: '20px',
    background: '#ddd',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }}
>
  <Button color="default">Color default</Button>
  <Button color="primary">Color primary</Button>
  <Button color="secondary">Color secondary</Button>
  <Button color="gradient">Color gradient</Button>
</div>
```

### Custom button:

```jsx
<div
  style={{
    padding: '20px',
    background: '#ddd',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }}
>
  <Button
    style={{
      color: '#fff',
      background: 'rgba(0,0,0,0.7)',
      border: 'none',
    }}
  >
    Color default
  </Button>
  <Button
    style={{
      color: '#fff',
      background: 'linear-gradient(to right, #e878d4, #b3ceeb)',
      border: 'none',
    }}
  >
    Color gradient
  </Button>
  <Button
    style={{
      color: '#fff',
      background: 'linear-gradient(to right, #ffafbd, #ffc3a0)',
      border: 'none',
    }}
  >
    Color gradient
  </Button>
  <Button
    style={{
      color: '#fff',
      background: 'linear-gradient(to right, #51a8c2, #a3dac4)',
      border: 'none',
    }}
  >
    Color gradient
  </Button>
</div>
```
