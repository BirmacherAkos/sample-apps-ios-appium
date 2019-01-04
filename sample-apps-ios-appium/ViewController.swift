
//
//  ViewController.swift
//  sample-apps-ios-appium
//
//  Created by Akos Birmacher on 2018. 12. 13..
//  Copyright © 2018. Bitrise. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var byeButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    @IBAction func onHelloButtonClicked(_ sender: Any) {
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) { [unowned self] in
            self.byeButton.isHidden = false
        }
        
    }
    
}

