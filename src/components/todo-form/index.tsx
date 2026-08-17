import PlusIcon from "../ui/icons/plus";

function TodoForm() {
  return (
    <div className="rounded-xl border-2 border-border p-8 sm:p-[2.4rem] shadow-sm">
      <h2 className="mb-[1.6rem] text-[1.8rem] font-semibold">Add Task</h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="h-[4.4rem] w-full rounded-xl border-2 border-border bg-surface px-[1.4rem] text-[1.4rem] outline-none placeholder:text-text-secondary focus:border-primary sm:flex-1"
        />

        <button
          type="button"
          className="flex h-14 sm:h-[4.4rem] w-full items-center justify-center gap-[0.4rem] rounded-xl bg-primary px-[1.4rem] text-[1.4rem] font-medium text-surface hover:bg-primary-hover sm:w-auto cursor-pointer transition-all duration-400"
        >
          <PlusIcon className="size-[1.8rem]" />
          <span>Add Task</span>
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
