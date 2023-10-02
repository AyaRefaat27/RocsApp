import User from "../Models/User.js";

// Create New User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Create! Try Again",
    });
  }
};

//Update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Update!",
    });
  }
};

//Delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Delete!",
    });
  }
};

//Get Single User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully Find The User",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found!",
    });
  }
};

//Get All User
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "Successfully Find All Users",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found!",
    });
  }
};
