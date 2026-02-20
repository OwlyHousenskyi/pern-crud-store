import { useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
import {
  ArrowLeftIcon,
  SaveIcon,
  Trash2Icon,
  DollarSignIcon,
  ImageIcon,
  Package2Icon,
} from "lucide-react";

function ProductPage() {
  const {
    currentProduct,
    formData,
    setFormData,
    loading,
    error,
    fetchProduct,
    updateProduct,
    deleteProduct,
  } = useProductStore();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* BACK BUTTON */}
      <button onClick={() => navigate("/")} className="btn btn-ghost mb-8">
        <ArrowLeftIcon className="size-4 mr-2" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* PRODUCT IMAGE */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-base-100">
          <img
            src={currentProduct?.image}
            alt={currentProduct?.name}
            className="size-full object-cover"
          />
        </div>

        {/* EDIT FORM */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="text-xl font-bold mb-8">Edit Product</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateProduct(id);
              }}
              className="space-y-6"
            >
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
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleDelete}
                  className="btn btn-ghost p-5 hover:shadow-lg hover:shadow-error/20 transition-all duration-200 text-error"
                >
                  <Trash2Icon className="size-5 mr-2" />
                  Delete
                </button>

                <button
                  type="submit"
                  className="btn btn-primary min-w-[140px] p-5"
                  disabled={
                    loading ||
                    !formData.name ||
                    !formData.price ||
                    !formData.image
                  }
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm" />
                  ) : (
                    <>
                      <SaveIcon className="size-5 mr-2" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
