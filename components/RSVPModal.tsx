"use client";

interface ModalProps {
  closeModal: () => void;
}

const RSVPModal = ({ closeModal }: ModalProps) => {
  return (
    <>
      <div
        className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex items-center justify-center px-4"
        aria-hidden="true"
        aria-labelledby="modal-title"
        role="dialog"
      >
        <div className="relative w-full max-w-2xl md:max-w-xl mx-auto shadow rounded-xl bg-white p-4 pt-0 h-fit">
          <span
            onClick={closeModal}
            className="flex justify-end text-4xl cursor-pointer font-light hover:font-bold"
          >
            &times;
          </span>

          <form className="flex flex-col space-y-4"></form>
        </div>
      </div>
    </>
  );
};

export default RSVPModal;
