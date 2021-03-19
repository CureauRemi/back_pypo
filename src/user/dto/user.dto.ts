import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty({
    type: Number,
  })
  id?: number;

  @ApiProperty({
    type: String,
    required: true,
  })
  firstName: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  lastName: string;

  @ApiProperty({
    type: Boolean,
    default: false,
  })
  isAdmin: boolean;

  @ApiProperty({
    type: Number,
  })
  codeAdmin?: number;
}
