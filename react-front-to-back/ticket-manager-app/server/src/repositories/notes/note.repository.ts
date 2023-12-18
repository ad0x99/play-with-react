import { Note, NoteModel } from "@entities/note.entity";
import { BaseRepository } from "@repositories/base-repository";
import { provide } from "inversify-binding-decorators";

@provide(NoteRepository)
class NoteRepository extends BaseRepository<Note> {
    constructor() {
        super();
        this.resources = NoteModel;
    }
}

export { NoteRepository };
