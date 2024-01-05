<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RejectionEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $employeeEmail;

    public function __construct($employeeEmail)
    {
        $this->employeeEmail = $employeeEmail;
    }

    public function build()
    {
        return $this->subject('Image Rejected')->view('rejection');
    }
}