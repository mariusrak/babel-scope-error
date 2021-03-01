# Babel scope error

When removing an import, it is still present in a scope. But the colision appears only with a class.
So when a class with same name is declared it fails. When const is declared, there is no problem.
Also if not an import is removed but a const declaration is removed, then class with same name can be declared.

# Run

```
npm i
node .
```

# Behavior

This code fails after run with an error of `Duplicate declaration "A"`

# Correct behavior

The code should run without an error and should write `compiled`
Eventually should be ran with `node dist/main.js` and write `works`
