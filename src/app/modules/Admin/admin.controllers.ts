/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { sendRespons } from '../../utils/sendRespons';
import { StatusCodes } from 'http-status-codes';
import { adminService } from './admin.service';

// Blocked User
const blockedUserController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { userId } = req.params;
    await adminService.blockedUserByAdminIntoDB(userId);
    sendRespons(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'User Blocked Successfully!',
    });
  },
);

// Delete Blog by Admin
const deleteBlogController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    await adminService.deleteBlogbyAdminIntoDB(id);
    sendRespons(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Blog Deleted Successfully!',
    });
  },
);

export const adminControllers = {
  blockedUserController,
  deleteBlogController,
};
