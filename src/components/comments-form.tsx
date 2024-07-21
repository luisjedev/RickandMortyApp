import { FormEvent, useState } from "react";
import { Comment } from "../interfaces";
import { fakePostComment } from "../api";
import { constantes } from "../utils";

export function CommentsForm() {
  const [newComment, setNewComment] = useState<Comment>({
    name: "",
    email: "",
    description: "",
  });
  const [alert, setAlert] = useState({
    state: "",
    description: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  function onHandleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setNewComment((prev) => ({
      ...prev,
      [name]: value,
    }));
    setShowAlert(false);
  }

  async function onHandleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!newComment.name.trim()) {
      setAlert({
        state: "Error",
        description: constantes.errors.INCORRECT_NAME,
      });
      setShowAlert(true);
      return;
    }
    if (!newComment.email.trim()) {
      setAlert({
        state: "Error",
        description: constantes.errors.INCORRECT_EMAIL,
      });
      setShowAlert(true);
      return;
    }
    if (!newComment.description.trim()) {
      setAlert({
        state: "Error",
        description: constantes.errors.INCORRECT_COMMENT,
      });
      setShowAlert(true);
      return;
    }
    if (newComment.description.length > 500) {
      setAlert({
        state: "Error",
        description: constantes.errors.INCORRECT_COMMENT_LENGTH,
      });
      setShowAlert(true);
      return;
    }

    const isSuccess = await fakePostComment(newComment);
    if (isSuccess) {
      setAlert({
        state: "Enviado",
        description: constantes.states.FORM_SUCCESS,
      });

      setNewComment({ name: "", email: "", description: "" });
    } else {
      setAlert({
        state: "Error",
        description: constantes.states.FORM_ERROR,
      });
    }
    setShowAlert(true);
  }

  return (
    <section>
      <h1 className="font-semibold mb-3">{constantes.literals.COMMENTS}</h1>

      <form
        className="flex flex-col justify-start items-center max-w-[500px] m-auto gap-3 mb-4"
        onSubmit={onHandleSubmit}
      >
        <input
          className="w-full border-gray-400 border p-2 rounded-md"
          name="name"
          value={newComment.name}
          type="text"
          placeholder="Tu nombre"
          required
          onChange={onHandleChange}
        />
        <input
          className="w-full border-gray-400 border p-2 rounded-md"
          name="email"
          value={newComment.email}
          type="email"
          placeholder="Correo electrónico"
          required
          onChange={onHandleChange}
        />
        <textarea
          className="resize-none w-full border-gray-400 border p-2 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          name="description"
          placeholder="Comentario (máx. 500 caracteres)"
          value={newComment.description}
          required
          rows={4}
          maxLength={500}
          onChange={onHandleChange}
        />
        <button className="bg-[#18186e] text-white px-4 py-2 rounded-md">
          Enviar
        </button>
      </form>
      <div
        className={`max-w-[500px] h-auto p-4 m-auto mb-3 text-center ${
          alert.state == "Error"
            ? `bg-red-100 border border-red-400`
            : `bg-green-100 border border-green-400`
        } rounded-md`}
        hidden={!showAlert}
      >
        <h2 className="font-semibold">{alert.state}</h2>
        <p>{alert.description}</p>
      </div>
    </section>
  );
}
