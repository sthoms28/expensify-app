const add = (a, b) => a+b;
const generateGreeting = (name='Anonymous') => `Hello ${name}!`;

test ('should add 2 numbers', () => {
    const result = add(4, 3);

    // if (result !==7) {
    //     throw new Error(`Added 4 and 3. result was ${result}`);
    // }

    expect(result).toBe(7)
});

test ('should add name to greeting', () => {
    const greeting = generateGreeting('mike');
    expect(greeting).toBe('Hello mike!')
});

test ('should create greeting with no name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!')
});

