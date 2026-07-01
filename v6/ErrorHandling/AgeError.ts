class AgeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AgeError";
    }
}

function register(age: number) {
    if (age < 18) {
        throw new AgeError("Age must be at least 18");
    }

    console.log("Registration successful");
}

try {
    register(16);
} catch (error) {
    if (error instanceof AgeError) {
        console.log(error.message);
    }
}