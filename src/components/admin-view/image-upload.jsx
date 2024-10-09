import { useRef } from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input";
import { UploadCloudIcon } from "lucide-react";

const ProductImageUpload = ({ imageFile, setImageFile, uploadedImageUrl, setUploadedImageUrl }) => {

  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0]
    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault()

  }

  function handleDrop(event) {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);

  }

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className='text-lg font-semibold mb-2 block'>Upload</Label>
      <div onDragOver={handleDragOver} onDrop={handleDrop} className="borser-2 border-dashed rounded-lg p-4">
        <Input
          id='image-upload'
          type='file'
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange} />
        {
          !imageFile ? (
            <Label htmlFor="image-upload" className="flex flex-col items-center justify-center h-32 cursor-pointer">
              <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
              <span>Drag & drop or click to upload image</span>

            </Label>) : (<div className="flex items-center justify-between"></div>
          )}
      </div>
    </div>
  )
}
export default ProductImageUpload