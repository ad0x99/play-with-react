import { CreateModule } from "@expressots/core";
import NoteController from "./note.controller";

const NoteModule = CreateModule([NoteController]);

export { NoteModule };
