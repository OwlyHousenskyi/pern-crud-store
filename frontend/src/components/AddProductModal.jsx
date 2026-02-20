import {
  DollarSignIcon,
  ImageIcon,
  Package2Icon,
  PlusCircleIcon,
} from "lucide-react";
import { useProductStore } from "../store/useProductStore";

function AddProductModal() {
  const { addProduct, formData, setFormData, loading } = useProductStore();

  const closeModal = () => {
    document.getElementById("add_product_modal").close();
  };

  return (
    <dialog id="add_product_modal" className="modal">
      <div className="modal-box bg-base-100 text-base-content">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        {/* HEADER */}
        <h3 className="font-bold text-xl mb-8">Add New Product</h3>

        {/* MAIN FORM */}
        <form onSubmit={addProduct} className="space-y-6">
          <div className="grid gap-6">
            {/* PRODUCT NAME */}
            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text text-base-content">
                  Product Name
                </span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Package2Icon className="size-5" />
                </div>

                <input
                  type="text"
                  placeholder="Enter product name"
                  className="input input-bordered w-full pl-3 py-3 bg-base-200 text-base-content placeholder:text-base-content/50 focus:input-primary"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* PRODUCT PRICE */}
            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text text-base-content">Price</span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <DollarSignIcon className="size-5" />
                </div>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="input input-bordered w-full pl-3 py-3 bg-base-200 text-base-content placeholder:text-base-content/50 focus:input-primary"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
            </div>

            {/* PRODUCT IMAGE */}
            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text text-base-content">
                  Image URL
                </span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <ImageIcon className="size-5" />
                </div>

                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full pl-3 py-3 bg-base-200 text-base-content placeholder:text-base-content/50 focus:input-primary"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="modal-action">
            <button
              type="button"
              onClick={closeModal}
              className="btn btn-ghost p-5 hover:shadow-lg hover:shadow-base-content/20 transition-all duration-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary min-w-[120px] p-5"
              disabled={
                !formData.name ||
                !formData.price ||
                !formData.image ||
                loading
              }
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                    <PlusCircleIcon className="size-5 mr-2" />
                    Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* BACKDROP */}
      <div className="modal-backdrop bg-black/40" onClick={closeModal} />
    </dialog>
  );
}

export default AddProductModal;
