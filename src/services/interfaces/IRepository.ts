interface IRepository<T> {
    create(item: T): T;
    findById(id: number): T | undefined;
    findAll(): T[];
    delete(id: number): void;
}