interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swim(): void;
}

class Sparrow implements Bird, FlyingBird, RunningBird {
    public fly(){}
    public eat(){}
    public run(){}
}

class Tucan implements Bird, FlyingBird {
    public fly(){}
    public eat(){}
}

class Ostrich implements Bird, RunningBird, SwimmingBird {
    public eat(){}
    public run(){}
    public swim(){}
}

class Penguin implements Bird, SwimmingBird {
    public eat(){}
    public swim(){}
}

