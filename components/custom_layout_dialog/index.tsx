import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const CustomLayoutDialog = ({ pr, pl, pt, pb, open, toggleClick, title, children,maxWidth,height}) => {
    return (
      <Dialog fullWidth={true} maxWidth={maxWidth}
        open={open} onClose={toggleClick}>
        {title!=''?<DialogTitle>{title}</DialogTitle>:null}
        <DialogContent sx={{ padding: `${pt}px ${pr}px ${pb}px ${pl}px`, height: height }}>
          {children}
        </DialogContent>
      </Dialog>
    )
  };
  export default CustomLayoutDialog;